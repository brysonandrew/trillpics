import { FC } from "react";
import { TimerDisplay } from "~/components/playback/timer/display";

export const TimerDisplayInit: FC =
  () => {
    return (
      <TimerDisplay
        elapsed={0}
        unit="seconds"
      />
    );
  };
