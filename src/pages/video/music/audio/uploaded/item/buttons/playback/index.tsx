import { type FC } from "react";
import { IconsPause24 } from "~/components/icons/playback/pause/24";
import { IconsPlay24 } from "~/components/icons/playback/play";
import { PlaybackButton } from "~/pages/video/music/audio/uploaded/item/buttons/playback/button";

export type TButtonsPlaybackProps = {
  isPlaying: boolean;
  onPlay(): void;
  onPause(): void;
};
export const ButtonsPlayback: FC<
  TButtonsPlaybackProps
> = ({
  isPlaying,
  onPause,
  onPlay,
}) => {
  return (
    <>
      {isPlaying ? (
        <PlaybackButton
          title="Pause"
          onClick={onPause}
        >
          <IconsPause24 />
        </PlaybackButton>
      ) : (
        <PlaybackButton
          title="Play"
          onClick={onPlay}
        >
          <IconsPlay24 />
        </PlaybackButton>
      )}
    </>
  );
};
