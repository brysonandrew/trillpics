import { type FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { resolveAccessibilityTitles } from "@brysonandrew/utils-attributes";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { useContextPlayer_Ready } from "~/pages/video/player/_context/ready";
import { IconsPause } from "~/components/icons/playback/pause";

export const PlaybackButtonsPlay: FC<
  Partial<TPillBProps>
> = (props) => {
  const { playerInstance, isPlaying } =
    useContextPlayer_Ready();

  const handlePlay = () => {
    playerInstance.unmute();
    playerInstance.toggle();
  };

  return (
    <PillB
      {...resolveAccessibilityTitles(
        isPlaying ? "pause" : "play"
      )}
      onClick={handlePlay}
      Icon={
        isPlaying
          ? IconsPause
          : IconsPlay
      }
      {...props}
    />
  );
};
