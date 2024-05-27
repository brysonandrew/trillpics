import { type FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { PillB } from "~/components/buttons/pill/b";
import { IconsPlaybackBack } from "~/components/icons/playback/back";

export const PlaybackButtonsBack: FC =
  () => {
    const {
      playerInstance,
      isStarted,
    } = useTrillPicsStore(
      ({
        playerInstance,
        isStarted,
      }) => ({
        playerInstance,
        isStarted,
      })
    );
    const isDisabled = !isStarted;
    const handleClick = async () => {
      if (playerInstance && !isDisabled) {
        playerInstance.pauseAndReturnToPlayStart();
      }
    };
    return (
      <PillB
        title="seek backward"
        onClick={handleClick}
        disabled={isDisabled}
        Icon={IconsPlaybackBack}
      />
    );
  };
