import { type FC } from "react";
import { useShallow } from "zustand/react/shallow";
import { useVideoStore } from "~/store";
import { PlaybackButtonsB } from "~/components/remotion/player/playback/buttons/b";
import { IconsPlaybackBack } from "~/components/icons/playback/back";
import { useCurrentFrame } from "remotion/dist/cjs/use-current-frame";

export const PlaybackButtonsBack: FC =
  () => {
    const {
      durationInFrames,
      playerElement,
      isPlaying,
    } = useVideoStore(
      useShallow(
        ({
          durationInFrames,
          playerElement,
          isPlaying,
        }) => ({
          durationInFrames,
          playerElement,
          isPlaying,
        })
      )
    );
    const isDisabled = !isPlaying;

    const handleClick = async () => {
      if (playerElement) {
        playerElement.pauseAndReturnToPlayStart();
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
