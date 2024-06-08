import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { useMusicPlaybackLookup } from "~/pages/video/music/playback/lookup";
import { SoundSequencerButton } from "~/pages/video/music/sequencer/buttons/button";
import { useSoundContext } from "~/shell/global/sound";
import { TSequenceSourceKey } from "~/store/state/music/types";
type TProps = {
  source: TSequenceSourceKey;
};
export const SoundSequencerTitle: FC<
  TProps
> = ({ source }) => {
  const { context } = useSoundContext();
  const lookup =
    useMusicPlaybackLookup();
  return (
    <SoundSequencerButton
      title={`play ${source}`}
      isActive
      onClick={() =>
        lookup[source](
          context.currentTime,
          {}
        )
      }
    >
      <IconsPlay classValue='-top-0.5' size={18} />
      <h4 className="text-base pr-1 uppercase">
        {source}
      </h4>
    </SoundSequencerButton>
  );
};
