import { FC, memo } from "react";
import { useCurrentPlayerFrame } from "~/hooks/remotion/use-current-player-frame";
import { TimerDisplay } from "~/components/remotion/player/playback/timer/display";

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
