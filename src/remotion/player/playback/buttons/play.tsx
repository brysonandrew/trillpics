import { type FC } from "react";
import { useShallow } from "zustand/react/shallow";
import { useVideoStore } from "@/store";
import { IconsPause } from "@/components/icons/playback/pause";
import { IconsPlay } from "@/components/icons/playback/play";
import { resolveInteractiveLabels } from "@brysonandrew/utils-attributes";
import { PlaybackButtonsB } from "@/remotion/player/playback/buttons/b";

export const PlaybackButtonsPlay: FC =
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

    const isDisabled =
      durationInFrames === 0;

    return (
      <PlaybackButtonsB
        {...resolveInteractiveLabels(
          isPlaying ? "pause" : "play"
        )}
        onClick={() =>
          !isDisabled &&
          playerElement?.toggle()
        }
        disabled={isDisabled}
        Icon={
          isPlaying
            ? IconsPause
            : IconsPlay
        }
      />
    );
  };
