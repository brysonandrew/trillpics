import { type FC } from "react";
import { useShallow } from "zustand/react/shallow";
import { useTrillPicsStore } from "~/store";
import { IconsPause } from "~/components/icons/playback/pause";
import { IconsPlay } from "~/components/icons/playback/play";
import { resolveInteractiveLabels } from "@brysonandrew/utils-attributes";
import { PlaybackButtonsB } from "~/components/remotion/player/playback/buttons/b";

export const PlaybackButtonsPlay: FC =
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

    const isDisabled =
      durationInFrames === 0;

    return (
      <PlaybackButtonsB
        {...resolveInteractiveLabels(
          isPlaying ? "pause" : "play"
        )}
        onClick={() =>
          !isDisabled &&
          playerElementRef.current?.toggle()
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
