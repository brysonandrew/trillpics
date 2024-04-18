import { type FC } from "react";
import { useShallow } from "zustand/react/shallow";
import { useVideoStore } from "@/store";
import { SEEK_FORWARD_SECONDS } from "@/remotion/player/playback/constants";
import { IconsChevronsRight } from "@/components/icons/chevrons/right";
import { PlaybackButtonsB } from "@/remotion/player/playback/buttons/b";

export const PlaybackButtonsForward: FC =
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
            SEEK_FORWARD_SECONDS
          )
        }
        disabled={isDisabled}
        Icon={IconsChevronsRight}
      />
    );
  };
