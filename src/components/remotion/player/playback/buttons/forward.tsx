import { type FC } from "react";
import { SEEK_FORWARD_SECONDS } from "~/components/remotion/player/playback/constants";
import { IconsChevronsRight } from "~/components/icons/chevrons/right";
import { PillB } from "~/components/buttons/pill/b";
import { useContextPlayer_Ready } from "~/pages/video/player/_context/ready";

export const PlaybackButtonsForward: FC =
  () => {
    const { seek } =
      useContextPlayer_Ready();

    return (
      <PillB
        title="seek backward"
        onClick={() =>
          seek.seconds(
            SEEK_FORWARD_SECONDS
          )
        }
        Icon={IconsChevronsRight}
      />
    );
  };
