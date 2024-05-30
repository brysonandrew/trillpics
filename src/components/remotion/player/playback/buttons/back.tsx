import { type FC } from "react";
import { PillB } from "~/components/buttons/pill/b";
import { IconsPlaybackBack } from "~/components/icons/playback/back";
import { useContextPlayer_Ready } from "~/pages/video/player/_context/ready";

export const PlaybackButtonsBack: FC =
  () => {
    const {
      playerInstance,
      isStarted,
    } = useContextPlayer_Ready();
    const isDisabled = !isStarted;
    const handleClick = async () => {
      if (!isDisabled) {
        playerInstance.pauseAndReturnToPlayStart();
      }
    };
    return (
      <PillB
        title="seek backward"
        onClick={handleClick}
        disabled={isDisabled}
        Icon={IconsPlaybackBack}
      />
    );
  };
