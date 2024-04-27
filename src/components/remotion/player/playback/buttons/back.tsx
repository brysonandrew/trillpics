import { type FC } from "react";
import { useTrillPicsStore } from "~/store";
import { PlaybackButtonsB } from "~/components/remotion/player/playback/buttons/b";
import { IconsPlaybackBack } from "~/components/icons/playback/back";

export const PlaybackButtonsBack: FC =
  () => {
    const {
      durationInFrames,
      playerInstance,
      isPlaying,
    } = useTrillPicsStore(
      ({
        durationInFrames,
        playerInstance,
        isPlaying,
      }) => ({
        durationInFrames,
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
      <PlaybackButtonsB
        title="seek backward"
        onClick={handleClick}
        disabled={isDisabled}
        Icon={IconsPlaybackBack}
      />
    );
  };
