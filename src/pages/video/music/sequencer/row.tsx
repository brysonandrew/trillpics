import type { FC } from "react";
import { motion } from "framer-motion";
import { Checkbox } from "~/components/inputs/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import clsx from "clsx";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { useVideoPlayerStyle } from "~/pages/video/player/style";

export const SoundSequencerRow: FC =
  () => {
    const { playerStyle } =
      useVideoPlayerStyle();
    const s = boxSize();
    const borderRadiusS =
      boxRadius("s");
    const borderRadius = boxRadius("m");
    const {
      sequences,
      checkBeat,
      checkAll,
      uncheckAll,
      checkEveryNth,
    } = useTrillPicsStore(
      ({
        sequences,
        checkBeat,
        checkAll,
        uncheckAll,
        checkEveryNth,
      }) => ({
        sequences,
        checkBeat,
        checkAll,
        uncheckAll,
        checkEveryNth,
      })
    );
    return (
      <div className="relative column-stretch gap-2">
        {sequences.map(
          (
            { source, beats },
            sequenceIndex
          ) => (
            <div
              key={source}
              className={clsx(
                "relative column-stretch px-2 py-2 bg-black-9 dark:bg-black-4",
                "uppercase text-sm font-slab"
              )}
              style={{
                borderRadius,
                gap: s.m025,
              }}
            >
              <div className="relative row-space">
                <div className="absolute _gradient-radial h-px w-full" />
                

                <div className="relative row gap-4">
                  <motion.button
                    style={{
                      borderRadius:
                        borderRadiusS,
                    }}
                    className="uppercase text-sm dark:bg-black-2 bg-black-6 px-2 leading-none pt-2 pb-1"
                    title="check all"
                    onClick={() =>
                      uncheckAll(
                        sequenceIndex
                      )
                    }
                  >
                    None
                  </motion.button>

                  <div className="relative row gap-1">
      
                    {[
                      2, 3, 4, 5, 6, 7,
                      8,
                    ].map((n) => {
                      const text = `${n}${
                        [
                          "",
                          "st",
                          "nd",
                          "rd",
                        ][n] ?? "th"
                      }`;
                      return (
                        <motion.button
                          key={text}
                          style={{
                            borderRadius:
                              borderRadiusS,
                          }}
                          className="uppercase text-sm dark:bg-black-2 bg-black-6 px-2 leading-none pt-2 pb-1"
                          title={`check every ${text}`}
                          onClick={() =>
                            checkEveryNth(
                              sequenceIndex,
                              n
                            )
                          }
                        >
                          {text}
                        </motion.button>
                      );
                    })}
                  </div>
                  <motion.button
                    title="check all"
                    className="uppercase text-sm dark:bg-black-2 bg-black-6 px-2 leading-none pt-2 pb-1"
                    onClick={() =>
                      checkAll(
                        sequenceIndex
                      )
                    }
                    style={{
                      borderRadius:
                        borderRadiusS,
                    }}
                  >
                    All
                  </motion.button>
                </div>
              </div>

              <div className="relative row-space">
                <div
                  className="absolute top-1/2 row-space top-0"
                  style={{
                    gap:
                      playerStyle.width /
                      36,
                    height: 0,
                    width: "100%",
                  }}
                >
                  {[...Array(4)].map(
                    (_, index) => (
                      <LinesHorizontal
                        key={`${index}`}
                        colorClass="dark:border-black-2 border-black-6"
                        style={{
                          borderWidth: 16,
                        }}
                      />
                    )
                  )}
                </div>
                {[...Array(16)].map(
                  (_, beatIndex) => {
                    const checked =
                      Boolean(
                        beats[beatIndex]
                      );
                    return (
                      <Checkbox
                        key={resolveCompositeKey(
                          source,
                          sequenceIndex,
                          beatIndex
                        )}
                        checked={
                          checked
                        }
                        onCheckedChange={(
                          nextChecked: CheckedState
                        ) =>
                          checkBeat(
                            sequenceIndex,
                            beatIndex,
                            nextChecked
                          )
                        }
                      />
                    );
                  }
                )}
              </div>
            </div>
          )
        )}
      </div>
    );
  };
