import type { FC } from "react";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { boxSize } from "~uno/rules/box/size";
import { SCALE_VALUE_COUNT } from "~/constants/scales";
import { ChartsGridStep } from "~/components/charts/grid/step";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { useTrillPicsStore } from "~/store/middleware";
import {
  TMidiValue,
  TMidiValues,
} from "~/hooks/music/midis/types";
import {
  TBeatValue,
  TPurcussionKey,
  TPurcussionRecord,
} from "~/hooks/music/beats/types";
import clsx from "clsx";

type TBeatsProps = {
  yOrder: readonly TPurcussionKey[];
  presets: TPurcussionRecord;
};
type TMidisProps = {
  presets: { synth: TMidiValues };
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
  return (
    <div
      className="relative row-stretch"
      style={{
        height: s.m2,
      }}
    >
      <div className="fill column-space items-stretch gap-1">
        {("yOrder" in props
          ? props.yOrder
          : ["synth"]
        ).map((stepsKey, rowIndex) => {
          const steps =
            "synth" in presets
              ? presets.synth
              : presets[
                  stepsKey as TPurcussionKey
                ];
          return (
            <div
              key={stepsKey}
              className="relative row-start-space h-full"
            >
              <div className="absolute right-full text-xxxs uppercase -translate-x-1">
                <div className="row gap-1">
                  {stepsKey ===
                  "synth" ? (
                    <>
                      <div>midi</div>
                      {`${synth.midi}`}
                    </>
                  ) : (
                    stepsKey
                  )}
                </div>
              </div>
              {rowIndex === 0 && (
                <div
                  className={clsx(
                    "absolute bottom-full right-0 text-xxxs uppercase -translate-x-1",
                    stepsKey === "synth"
                      ? "-translate-y-0.5"
                      : "-translate-y-4"
                  )}
                >
                  <div className="row gap-1">
                    <>
                      {stepsKey ===
                      "synth" ? null : (
                        <>
                          <div>
                            beats
                          </div>
                          {steps.length/4},
                        </>
                      )}
                      <div>steps</div>
                      {steps.length}
                    </>
                  </div>
                </div>
              )}
              {stepsKey === "synth" ? (
                [
                  ...Array(
                    SCALE_VALUE_COUNT
                  ),
                ].map((_, index) => (
                  <LinesHorizontal
                    key={`line-${index}`}
                    style={{
                      top: `${
                        (index /
                          SCALE_VALUE_COUNT) *
                          80 +
                        10
                      }%`,
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
                          | TPurcussionKey
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
        })}
      </div>
    </div>
  );
};
