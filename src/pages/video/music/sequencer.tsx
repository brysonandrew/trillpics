import type { FC } from "react";
import { motion } from "framer-motion";
import { Checkbox } from "~/components/inputs/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useTrillPicsStore } from "~/store/middleware";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import clsx from "clsx";

export const SoundSequencer: FC =
  () => {
    const s = boxSize();
    const borderRadius = boxRadius("m");
    const {
      sequences,
      set,
      checkBeat,
      checkAll,
      uncheckAll,
      checkEveryNth,
    } = useTrillPicsStore(
      ({
        sequences,
        set,
        checkBeat,
        checkAll,
        uncheckAll,
        checkEveryNth,
      }) => ({
        sequences,
        set,
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
              className={clsx(
                "column-stretch gap-1 px-4 py-3 bg-gray-02",
                "uppercase text-sm font-slab"
              )}
              style={{ borderRadius }}
            >
              <div className="row-space">
                <h4>{source}</h4>
                <ul className="row gap-3">
                  <li className="row gap-0.5">
                    <motion.button
                      title="check all"
                      className="uppercase text-sm bg-gray px-1 leading-none pt-1"
                      onClick={() =>
                        checkAll(
                          sequenceIndex
                        )
                      }
                    >
                      All
                    </motion.button>
                  </li>
                  <li className="row gap-1">
                    <motion.button
                      className="uppercase text-sm bg-gray px-1 leading-none pt-1"
                      title="check all"
                      onClick={() =>
                        uncheckAll(
                          sequenceIndex
                        )
                      }
                    >
                      None
                    </motion.button>
                  </li>

                  <li className="relative row gap-1">
                    <div className="absolute left-0 -top-1 w-full h-px bg-gray"/>
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-full text-xxs text-gray tracking-widest char-gap-10">
                      Every
                    </span>
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
                          className="uppercase text-sm bg-gray px-1 leading-none pt-1"
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
                  </li>
                </ul>
              </div>
              <div className="row-space">
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
