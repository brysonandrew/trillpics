import type { FC } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { RANDOM_MIDI_RANGE } from "~/constants/music/midis";
import { STEPS } from "~/constants/music/steps";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import clsx from "clsx";
import { isNumber } from "~/utils/validation/is/number";
import { SCALE_VALUE_COUNT } from "~/constants/scales";

type TProps = {
  // gridCells:any[][]
  presets: Record<
    string,
    readonly (number | null)[]
  >;
};
export const VideoMusicGrid: FC<
  TProps
> = ({ presets }) => {
  const s = boxSize();
  const borderRadius = boxRadius();
  const { gridCellsRecord } =
    useMusicInitContext();
  return (
    <div
      className="relative row-stretch"
      style={{
        height: s.m2,
      }}
    >
      <div className="fill column-space items-stretch gap-1">
        {Object.entries(presets).map(
          (
            [stepsKey, steps],
            rowIndex,
            { length: count }
          ) => {
            return (
              <div
                key={stepsKey}
                className="relative row-start-space h-full"
              >
                {count === 1 &&
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
                    />
                  ))}
                {steps.map(
                  (value, columnIndex) => {
                    // const value =
                    //   steps[
                    //     columnIndex
                    //   ];

                    const isNullValue =
                      value === null;
                      const key = `${columnIndex}-${value}`;
                    return (
                      <div
                        key={`${columnIndex}`}
                        className="column relative w-full"
                        style={{
                          top: isNullValue
                            ? 0
                            : `${
                                (value /
                                  RANDOM_MIDI_RANGE) *
                                  80 +
                                10
                              }%`,
                        }}
                      >
                        <div
                          key={key}
                          ref={(
                            instance
                          ) => {
                            if (
                              !gridCellsRecord[
                                key
                              ]
                            ) {
                              gridCellsRecord[
                                key
                              ] = [];
                            }
                            if (
                              !gridCellsRecord[
                                key
                              ][
                                rowIndex
                              ]
                            ) {
                              gridCellsRecord[
                                key
                              ][
                                rowIndex
                              ] = [];
                            }
                            const gridCell =
                              gridCellsRecord[
                                key
                              ]?.[
                                rowIndex
                              ]?.[
                                columnIndex
                              ];
                            if (
                              instance &&
                              !gridCell
                            ) {
                              gridCellsRecord[
                                key
                              ][
                                rowIndex
                              ][
                                columnIndex
                              ] =
                                instance;
                            }
                          }}
                          className={clsx(
                            "bg-white"
                          )}
                          style={{
                            position:
                              "relative",
                            top: -s.m0625,
                            borderRadius,
                            ...resolveSquare(
                              s.m0125
                            ),
                            opacity:
                              isNumber(
                                value
                              )
                                ? 1
                                : 0.28,
                          }}
                        />
                      </div>
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
