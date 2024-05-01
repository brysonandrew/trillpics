import { type FC } from "react";
import { useTrillPicsStore } from "~/store";
import { SEEK_BACKWARD_SECONDS } from "~/components/remotion/player/playback/constants";
import { IconsChevronsLeft } from "~/components/icons/chevrons/left";
import { PlaybackButtonsB } from "~/components/remotion/player/playback/buttons/b";
import { PillB } from "~/components/buttons/pill/b";

export const PlaybackButtonsBackward: FC =
  () => {
    const {
      seekSeconds,
      durationInFrames,
    } = useTrillPicsStore(
      ({
        seekSeconds,
        durationInFrames,
      }) => ({
        seekSeconds,
        durationInFrames,
      })
    );
    const isDisabled =
      durationInFrames === 0;

    return (
      <PillB
        title="seek backward"
        onClick={() =>
          seekSeconds(
            SEEK_BACKWARD_SECONDS
          )
        }
        disabled={isDisabled}
        Icon={IconsChevronsLeft}
      />
    );
  };
