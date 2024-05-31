import { type FC } from "react";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { IconsFullscreen } from "~/components/icons/playback/fullscreen";
import { useContextPlayer_Ready } from "~/pages/video/player/_context/ready";

export const PlaybackButtonsFullscreen: FC<
  Partial<TPillBProps>
> = () => {
  const { playerInstance } =
    useContextPlayer_Ready();

  return (
    <PillB
      title="seek backward"
      onClick={() => {
        playerInstance.requestFullscreen();
      }}
      Icon={IconsFullscreen}
    />
  );
};
