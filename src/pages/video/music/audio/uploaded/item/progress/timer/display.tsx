import type { FC } from "react";
import { TimerDisplay } from "~/components/playback/timer/display";

export type TProgressTimerDisplayProps =
  { seconds: number; width?: number };
export const ProgressTimerDisplay: FC<
  TProgressTimerDisplayProps
> = ({ seconds }) => {
  return (
    <TimerDisplay
      elapsed={seconds}
      unit="seconds"
    />
  );
};
