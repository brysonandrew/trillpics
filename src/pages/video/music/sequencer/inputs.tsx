import type { FC } from "react";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { CheckedState } from "@radix-ui/react-checkbox";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useTrillPicsStore } from "~/store/middleware";
import { TSequenceSourceKey } from "~/store/state/music/types";
import { boxSize } from "~uno/rules/box/size";
import { Checkbox } from "~/components/inputs/checkbox";
import { boxRadius } from "~uno/rules/box/radius";

type TProps = {
  beats: number[];
  sequenceIndex: number;
  source: TSequenceSourceKey;
};
export const SoundSequencerInputs: FC<
  TProps
> = ({
  beats,
  sequenceIndex,
  source,
}) => {
  const s = boxSize();
  const borderRadius = boxRadius("m");

  const { playerStyle } =
    useVideoPlayerStyle();
  const { checkBeat } =
    useTrillPicsStore(
      ({ checkBeat }) => ({
        checkBeat,
      })
    );
  return (
    <div className="relative row-space">
      <div
        className="absolute top-1/2 row-space bg-red"
        style={{
          gap: playerStyle.width / 32,
          left: -s.m0125,
          height:0,
          width:
            playerStyle.width - s.m0125,
        }}
      >
        {[...Array(4)].map(
          (_, index) => (
            <div
              key={`${index}`}
              className="dark:bg-black-2 bg-black-6"
              style={{ borderRadius, width: 'calc(25% - 1rem)', height: '2rem' }}
            />
          )
        )}
      </div>
      {[...Array(16)].map(
        (_, beatIndex) => {
          const checked = Boolean(
            beats[beatIndex]
          );
          return (
            <Checkbox
              key={resolveCompositeKey(
                source,
                sequenceIndex,
                beatIndex
              )}
              className='relative'
              checked={checked}
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
  );
};
