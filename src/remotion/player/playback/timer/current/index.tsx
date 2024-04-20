import { FC, memo } from "react";
import { useCurrentPlayerFrame } from "~/remotion/hooks/use-current-player-frame";
import { TimerDisplay } from "~/remotion/player/playback/timer/display";

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
