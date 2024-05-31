import { type FC } from "react";
import { IconsChevronsLeft } from "~/components/icons/chevrons/left";
import { PillB } from "~/components/buttons/pill/b";
import { useContextPlayer_Ready } from "~/pages/video/player/_context/ready";

export const PlaybackButtonsBackward: FC =
  () => {
    const { seek } =
      useContextPlayer_Ready();

    return (
      <PillB
        title="seek backward"
        onClick={seek.backward}
        Icon={IconsChevronsLeft}
      />
    );
  };
