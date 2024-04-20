import type { FC } from "react";
import { useVideoStore } from "~/store";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsFullscreen } from "~/components/icons/playback/fullscreen";

export const ControlsFullscreen: FC =
  () => {
    const { playerElement } =
      useVideoStore();
    const handleClick = async () => {
      if (playerElement) {
        playerElement.requestFullscreen();
      }
    };
    const title = "Fullscreen";

    return (
      <PillBHover
        title={title}
        onClick={handleClick}
        Icon={IconsFullscreen}
        disabled={!playerElement}
      >
        {title}
      </PillBHover>
    );
  };
