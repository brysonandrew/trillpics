import { type FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { IconsFullscreen } from "~/components/icons/playback/fullscreen";

export const PlaybackButtonsFullscreen: FC<
  Partial<TPillBProps>
> = () => {
  const { playerInstance } =
    useTrillPicsStore(
      ({ playerInstance }) => ({
        playerInstance,
      })
    );
  return (
    <PillB
      title="seek backward"
      onClick={() => {
        if (playerInstance) {
          playerInstance.requestFullscreen();
        }
      }}
      Icon={IconsFullscreen}
    />
  );
};
