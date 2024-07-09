import { type FC } from "react";
import { IconsPause } from "~/components/icons/playback/pause";
import { IconsPause24 } from "~/components/icons/playback/pause/24";
import { IconsPlay, IconsPlay24 } from "~/components/icons/playback/play";
import { IconsSvgGradient24 } from "~/components/icons/svg/gradient/24";
import { PlaybackButton } from "~/pages/video/music/audio/uploaded/item/buttons/playback/button";
import { PlaybackIconsPause } from "~/pages/video/music/audio/uploaded/item/buttons/playback/icons/pause";
import { PlaybackIconsPlay } from "~/pages/video/music/audio/uploaded/item/buttons/playback/icons/play";

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
