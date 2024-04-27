import { type FC } from "react";
import { useTrillPicsStore } from "~/store";
import { PlaybackButtonsB } from "~/components/remotion/player/playback/buttons/b";
import { IconsPlaybackBack } from "~/components/icons/playback/back";

export const PlaybackButtonsBack: FC =
  () => {
    const {
      durationInFrames,
      playerElementRef,
      isPlaying,
    } = useTrillPicsStore(
      ({
        durationInFrames,
        playerElementRef,
        isPlaying,
      }) => ({
        durationInFrames,
        playerElementRef,
        isPlaying,
      })
    );
    const isDisabled = !isPlaying;

    const handleClick = async () => {
      if (playerElementRef.current) {
        playerElementRef.current.pauseAndReturnToPlayStart();
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
