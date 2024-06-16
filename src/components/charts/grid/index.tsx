import type { FC } from "react";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { boxSize } from "~uno/rules/box/size";
import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { ChartsGridStep } from "~/components/charts/grid/step";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { useTrillPicsStore } from "~/store/middleware";
import { TMidisRecord } from "~/hooks/music/midis/types";
import {
  TBeatsKey,
  TBeatsRecord,
} from "~/hooks/music/beats/types";
import { ChartsGridLabelsName } from "~/components/charts/grid/labels/name";
import { ChartsGridLabelsSteps } from "~/components/charts/grid/labels/steps";
import { UStepsKey } from "~/store/state/music/types";
import { resolveTop } from "~/components/charts/grid/top";

type TBeatsProps = {
  yOrder: readonly TBeatsKey[];
  presets: TBeatsRecord;
};
type TMidisProps = {
  presets: TMidisRecord;
};
type TProps = TBeatsProps | TMidisProps;
export const ChartsGrid: FC<TProps> = (
  props
) => {
  const s = boxSize();
  const { synth } = useTrillPicsStore(
    ({ synth }) => ({ synth })
  );
  const presets = props.presets;
  const keys =
    "yOrder" in props
      ? props.yOrder
      : (["synth"] as const);
  return (
    <div
      className="relative row-stretch"
      style={{
        height: s.m2,
      }}
    >
      <div className="fill column-space items-stretch gap-1">
        {keys.map(
          (
            stepsKey: UStepsKey,
            rowIndex
          ) => {
            const steps =
              "synth" in presets
                ? presets.synth
                : presets[
                    stepsKey as TBeatsKey
                  ];
            const isSynth =
              stepsKey === "synth";

            return (
              <div
                key={stepsKey}
                className="relative row-start-space text-white text-xxxs uppercase h-full"
              >
                <ChartsGridLabelsName
                  stepsCount={
                    steps.length
                  }
                  stepsKey={stepsKey}
                />
                {rowIndex === 0 && (
                  <ChartsGridLabelsSteps
                    stepsCount={
                      steps.length
                    }
                    stepsKey={stepsKey}
                  />
                )}
                {isSynth ? (
                  [
                    ...Array(
                      SCALE_VALUE_COUNT
                    ),
                  ].map((_, index) => (
                    <LinesHorizontal
                      key={`line-${index}`}
                      style={{
                        top: resolveTop(
                          index
                        ),
                        opacity: 0.1,
                        width: "100%",
                      }}
                      positionClass="absolute"
                      colorClass="border-white"
                      sizeClass="border-t"
                    />
                  ))
                ) : (
                  <LinesHorizontal
                    key={`line`}
                    style={{
                      top: 0,
                      opacity: 0.1,
                      width: "100%",
                    }}
                    positionClass="absolute"
                    colorClass="border-white"
                    sizeClass="border-t"
                  />
                )}
                {steps.map(
                  (
                    value,
                    columnIndex
                  ) => {
                    return (
                      <ChartsGridStep
                        key={resolveCompositeKey(
                          columnIndex,
                          rowIndex
                        )}
                        title={`Play ${stepsKey}`}
                        stepsKey={
                          stepsKey as
                            | "synth"
                            | TBeatsKey
                        }
                        value={value}
                        columnIndex={
                          columnIndex
                        }
                        rowIndex={
                          rowIndex
                        }
                      />
                    );
                  }
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
