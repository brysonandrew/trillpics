import { type FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { SEEK_BACKWARD_SECONDS } from "~/components/remotion/player/playback/constants";
import { IconsChevronsLeft } from "~/components/icons/chevrons/left";
import { PillB } from "~/components/buttons/pill/b";

export const PlaybackButtonsBackward: FC =
  () => {
    const {
      seekSeconds,
    } = useTrillPicsStore(
      ({
        seekSeconds,
      }) => ({
        seekSeconds,
      })
    );

    return (
      <PillB
        title="seek backward"
        onClick={() =>
          seekSeconds(
            SEEK_BACKWARD_SECONDS
          )
        }
        Icon={IconsChevronsLeft}
      />
    );
  };
