import type { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsFullscreen } from "~/components/icons/playback/fullscreen";

export const PlayerFooterButtonsFullscreen: FC =
  () => {
    const { playerInstance } =
      useTrillPicsStore(
        ({ playerInstance }) => ({
          playerInstance,
        })
      );
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
