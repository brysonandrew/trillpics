import type { FC } from "react";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsFullscreen } from "~/components/icons/playback/fullscreen";
import { useContextPlayer_Ready } from "~/pages/video/player/_context/ready";

export const PlayerFooterButtonsFullscreen: FC =
  () => {
    const { playerInstance } =
      useContextPlayer_Ready();
    const handleClick = async () => {
      if (playerInstance) {
        playerInstance.requestFullscreen();
      }
    };
    const title = "Fullscreen";

    return (
      <PillBHover
        title={title}
        onClick={handleClick}
        Icon={IconsFullscreen}
        disabled={!playerInstance}
      >
        {title}
      </PillBHover>
    );
  };
