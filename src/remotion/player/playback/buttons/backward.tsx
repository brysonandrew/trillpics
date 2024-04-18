import { type FC } from "react";
import { useShallow } from "zustand/react/shallow";
import { useVideoStore } from "@/store";
import { SEEK_BACKWARD_SECONDS } from "@/remotion/player/playback/constants";
import { IconsChevronsLeft } from "@/components/icons/chevrons/left";
import { PlaybackButtonsB } from "@/remotion/player/playback/buttons/b";

export const PlaybackButtonsBackward: FC =
  () => {
    const {
      seekBySeconds,
      durationInFrames,
    } = useVideoStore(
      useShallow(
        ({
          seekBySeconds,
          durationInFrames,
        }) => ({
          seekBySeconds,
          durationInFrames,
        })
      )
    );
    const isDisabled =
      durationInFrames === 0;

    return (
      <PlaybackButtonsB
        title="seek backward"
        onClick={() =>
          seekBySeconds(
            SEEK_BACKWARD_SECONDS
          )
        }
        disabled={isDisabled}
        Icon={IconsChevronsLeft}
      />
    );
  };
