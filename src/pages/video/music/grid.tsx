import type { FC } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { RANDOM_MIDI_RANGE } from "~/constants/music/midis";
import { STEPS } from "~/constants/music/steps";
import { boxSize } from "~uno/rules/box/size";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { boxRadius } from "~uno/rules/box/radius";

type TProps = {
  presets: Record<
    string,
    readonly (number | null)[]
  >;
};
export const VideoMusicGrid: FC<
  TProps
> = ({ presets }) => {
  const s = boxSize();
  const borderRadius = boxRadius()
  const {
    sidebarWidthOffset,
    width,
    left,
    screen,
  } = useVideoPlayerStyle();
  return (
    <div
      className="relative row-stretch"
      style={{
        // paddingLeft: s.m05,
        // paddingRight: s.m05,
        // left: -left + s.m05,
        height: s.m2,
        // width: screen.width - s.m,
      }}
    >
      <div className="fill column-space items-stretch gap-1">
        {Object.entries(presets).map(
          (
            [key, steps],
            index,
            { length: count }
          ) => {
            return (
              <div
                key={key}
                className="relative row-start-space h-full"
              >
                {STEPS.map(
                  (_, index) => {
                    const value =
                      steps[index];

                    if (value === null)
                      return <div />;

                    return (
                      <div
                        className="column relative w-full"
                        style={{
                          top: `${
                            (value *
                              100) /
                            RANDOM_MIDI_RANGE
                          }%`,
                        }}
                      >
                        {count ===
                          1 && (
                          // <div
                          //   key={`line-${index}`}
                          //   className="w-full h-1 bg-white-06 dark:bg-black-05"
                          // />
                          <LinesHorizontal
                            style={{
                              top: s.m0625,
                              opacity: 0.2,
                            }}
                            colorClass='bg-gray-01'
                            key={`line-${index}`}
                          />
                        )}
                        {Boolean(
                          value
                        ) ? (
                          <div
                            key={`i-${index}`}
                            className="bg-white-06 dark:bg-white-02"
                            style={{
                              borderRadius,
                              ...resolveSquare(
                                s.m0125
                              ),
                            }}
                          />
                        ) : (
                          <div
                            key={`${index}`}
                            className="bg-white-03 dark:bg-gray-02"
                            style={{
                              borderRadius,

                              ...resolveSquare(
                                s.m0125
                              ),
                            }}
                          />
                        )}
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
