import { type FC } from "react";
import { useTrillPicsStore } from "~/store";
import { IconsPause } from "~/components/icons/playback/pause";
import { IconsPlay } from "~/components/icons/playback/play";
import { resolveInteractiveLabels } from "@brysonandrew/utils-attributes";
import { PillB } from "~/components/buttons/pill/b";

export const PlaybackButtonsPlay: FC =
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

    const isDisabled =
      durationInFrames === 0;

    return (
      <PillB
        {...resolveInteractiveLabels(
          isPlaying ? "pause" : "play"
        )}
        onClick={() =>
          !isDisabled &&
          playerInstance?.toggle()
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
