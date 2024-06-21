import type { FC } from "react";
import { boxSize } from "~uno/rules/box/size";
import { ChartsGridStep } from "~/components/charts/grid/step";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TMidisRecord } from "~/hooks/music/midis/types";
import {
  TBeatsKey,
  TBeatsRecord,
} from "~/hooks/music/beats/types";
import { UStepsKey } from "~/store/state/music/types";
import { ChartsGridLabels } from "~/components/charts/grid/labels";

type TBeatsProps = {
  musicKey: "beats";
  includes: readonly TBeatsKey[];
  presets: TBeatsRecord;
  Background: FC;
};
type TMidisProps = {
  musicKey: "midis";
  presets: TMidisRecord;
  Background: FC;
};
type TProps = TBeatsProps | TMidisProps;
export const ChartsGrid: FC<TProps> = ({
  Background,
  musicKey,
  ...props
}) => {
  const s = boxSize();
  const presets = props.presets;
  const keys =
    "includes" in props
      ? props.includes
      : (["synth"] as const);

  return (
    <div
      className="relative column-space items-stretch justify-stretch"
      style={{
        height: s.m2,
      }}
    >
      {keys.map(
        (
          stepsKey: UStepsKey,
          rowIndex,
          { length: stepCount }
        ) => {
          const steps =
            "synth" in presets
              ? presets.synth
              : presets[
                  stepsKey as TBeatsKey
                ];
          return (
            <div
              key={stepsKey}
              className="relative flex flex-row grow items-between justify-stretch w-full text-white text-xxxs uppercase h-full"
            >
              <ChartsGridLabels
                stepsCount={
                  steps.length
                }
                stepsKey={stepsKey}
                rowIndex={rowIndex}
              />
              <Background />
              {steps.map(
                (
                  value,
                  columnIndex
                ) => {
                  const key =
                    resolveCompositeKey(
                      stepsKey,
                      columnIndex,
                      rowIndex
                    );
                  return (
                    <ChartsGridStep
                      key={key}
                      title={`► Play ${stepsKey} step`}
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
                      stepCount={
                        stepCount
                      }
                      musicKey={
                        musicKey
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
  );
};
