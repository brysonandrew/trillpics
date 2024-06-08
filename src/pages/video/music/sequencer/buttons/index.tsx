import type { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { SoundSequencerButton } from "~/pages/video/music/sequencer/buttons/button";
import { GAP_FILLS } from "~/pages/video/music/sequencer/buttons/constants";

type TProps = {
  sequenceIndex: number;
  activeButton: any;
  resolveCheckRandom?: any;
};
export const SoundSequencerButtons: FC<
  TProps
> = ({
  sequenceIndex,
  activeButton,
  resolveCheckRandom,
}) => {
  const {
    checkAll,
    uncheckAll,
    checkEveryNth,
    checkRandom,
  } = useTrillPicsStore(
    ({
      checkAll,
      uncheckAll,
      checkEveryNth,
      checkRandom,
    }) => ({
      checkAll,
      uncheckAll,
      checkEveryNth,
      checkRandom,
    })
  );
  return (
    <div className="relative row gap-1 lg:gap-4">
      <SoundSequencerButton
        isActive={
          activeButton === "none"
        }
        title="uncheck all"
        onClick={() =>
          uncheckAll(sequenceIndex)
        }
      >
        None
      </SoundSequencerButton>

      <>
        {GAP_FILLS.map((n) => {
          const text = `${n}${
            ["", "st", "nd", "rd"][n] ??
            "th"
          }`;
          return (
            <SoundSequencerButton
              key={text}
              isActive={
                activeButton === n
              }
              title={`check every ${text}`}
              onClick={() =>
                checkEveryNth(
                  sequenceIndex,
                  n
                )
              }
            >
              {text}
            </SoundSequencerButton>
          );
        })}
      </>
      <SoundSequencerButton
        title="check all"
        isActive={
          activeButton === "all"
        }
        onClick={() =>
          checkAll(sequenceIndex)
        }
      >
        All
      </SoundSequencerButton>
      <SoundSequencerButton
        title="check random"
        isActive={activeButton === null}
        onClick={() => {
          if (resolveCheckRandom) {
            resolveCheckRandom(
              sequenceIndex
            );
            return;
          }
          checkRandom(sequenceIndex);
        }}
      >
        Random
      </SoundSequencerButton>
    </div>
  );
};
