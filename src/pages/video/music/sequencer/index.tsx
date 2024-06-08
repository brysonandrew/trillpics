import type { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import clsx from "clsx";
import { SoundSequencerTitle } from "~/pages/video/music/sequencer/title";
import { SoundSequencerButtons } from "~/pages/video/music/sequencer/buttons";
import { SoundSequencerInputs } from "~/pages/video/music/sequencer/inputs";

export const SoundSequencer: FC =
  () => {
    const s = boxSize();
    const borderRadius = boxRadius("m");
    const { sequences } =
      useTrillPicsStore(
        ({ sequences }) => ({
          sequences,
        })
      );
    return (
      <div className="relative column-stretch gap-2">
        {sequences.map(
          (
            { source, beats, activeButton },
            sequenceIndex
          ) => (
            <div
              key={source}
              className={clsx(
                "relative column-stretch p-2 bg-black-9 dark:bg-black-4",
                "uppercase text-sm font-slab"
              )}
              style={{
                borderRadius,
                gap: s.m025,
              }}
            >
              <div className="relative row-space">
                <div className="absolute _gradient-radial h-px w-full" />
                <SoundSequencerTitle
                  source={source}
                />
                <SoundSequencerButtons
                  sequenceIndex={
                    sequenceIndex
                  }
                  activeButton={activeButton}
                />
              </div>
              <SoundSequencerInputs
                sequenceIndex={
                  sequenceIndex
                }
                source={source}
                beats={beats}
              />
            </div>
          )
        )}
      </div>
    );
  };
