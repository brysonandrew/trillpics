import type { FC } from "react";
import { useTrillPicsStore } from "~/store";
import { PillBHover } from "~/components/buttons/pill/b/hover";
import { IconsFullscreen } from "~/components/icons/playback/fullscreen";

export const PlayerFooterButtonsFullscreen: FC =
  () => {
    const { playerElementRef } =
      useTrillPicsStore(
        ({ playerElementRef }) => ({
          playerElementRef,
        })
      );
    const handleClick = async () => {
      if (playerElementRef.current) {
        playerElementRef.current.requestFullscreen();
      }
    };
    const title = "Fullscreen";

    return (
      <PillBHover
        title={title}
        onClick={handleClick}
        Icon={IconsFullscreen}
        disabled={!playerElementRef}
      >
        {title}
      </PillBHover>
    );
  };
