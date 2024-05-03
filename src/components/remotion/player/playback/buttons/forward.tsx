import { type FC } from "react";
import { useTrillPicsStore } from "~/store";
import { SEEK_FORWARD_SECONDS } from "~/components/remotion/player/playback/constants";
import { IconsChevronsRight } from "~/components/icons/chevrons/right";
import { PillB } from "~/components/buttons/pill/b";

export const PlaybackButtonsForward: FC =
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
            SEEK_FORWARD_SECONDS
          )
        }
        disabled={isDisabled}
        Icon={IconsChevronsRight}
      />
    );
  };
