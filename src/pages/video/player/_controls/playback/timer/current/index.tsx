import { FC, memo } from "react";
import { useCurrentPlayerFrame } from "~/pages/video/player/_context/ready/hooks/use-current-player-frame";
import { TimerDisplay } from "~/pages/video/player/_controls/playback/timer/display";

const _TimerCurrent: FC = () => {
  const currentFrame =
    useCurrentPlayerFrame();
  return (
    <TimerDisplay
      frame={currentFrame}
    />
  );
};

export const TimerCurrent = memo(
  _TimerCurrent
);
