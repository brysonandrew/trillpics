import { FC, memo } from "react";
import { TimerDisplay } from "~/components/playback/timer/display";
import { useCurrentPlayerFrame } from "~/pages/video/player/_context/ready/hooks/use-current-player-frame";

const TimerCurrent: FC = () => {
  const currentFrame =
    useCurrentPlayerFrame();
  return (
    <TimerDisplay
      elapsed={currentFrame}
      unit="frames"
    />
  );
};

export const _ControlsPlaybackTimer = memo(
  TimerCurrent
);
