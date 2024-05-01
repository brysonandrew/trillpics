import { type FC } from "react";
import { useTrillPicsStore } from "~/store";
import { PillB } from "~/components/buttons/pill/b";
import { IconsPlaybackBack } from "~/components/icons/playback/back";

export const PlaybackButtonsBack: FC =
  () => {
    const {
      playerInstance,
      isPlaying,
    } = useTrillPicsStore(
      ({
        playerInstance,
        isPlaying,
      }) => ({
        playerInstance,
        isPlaying,
      })
    );
    const isDisabled = !isPlaying;

    const handleClick = async () => {
      if (playerInstance) {
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
