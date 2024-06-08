import { FC, memo } from "react";
import { TimerDisplay } from "~/components/playback/timer/display";
import { useCurrentPlayerFrame } from "~/pages/video/player/_context/ready/hooks/use-current-player-frame";

export const VideoMusicPlaybackTimerCurrent: FC =
  memo(() => {

    return (
      <TimerDisplay
        elapsed={0}
        unit="seconds"
      />
    );
  });
