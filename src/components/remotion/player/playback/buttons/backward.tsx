import { type FC } from "react";
import { useTrillPicsStore } from "~/store";
import { SEEK_BACKWARD_SECONDS } from "~/components/remotion/player/playback/constants";
import { IconsChevronsLeft } from "~/components/icons/chevrons/left";
import { PlaybackButtonsB } from "~/components/remotion/player/playback/buttons/b";

export const PlaybackButtonsBackward: FC =
  () => {
    const {
      seekBySeconds,
      durationInFrames,
    } = useTrillPicsStore(
      ({
        seekBySeconds,
        durationInFrames,
      }) => ({
        seekBySeconds,
        durationInFrames,
      })
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
