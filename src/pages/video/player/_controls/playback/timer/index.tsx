import { FC } from "react";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { PlaybackTimer } from "~/components/playback/timer";
import { TimerCurrentProgressFromFrames } from "~/pages/video/player/_controls/playback/progress/from-frames";

export const _ControlsPlaybackTimer: FC =
  () => {
    const seconds =
      usePicVideoReadSeconds();
console.log(seconds)
    return (
      <PlaybackTimer
        durationProps={{
          elapsed: seconds,
          unit: "seconds",
        }}
        TimerCurrentFc={
          () => {
            console.log("<TimerCurrentProgressFromFrames/>")
            return <TimerCurrentProgressFromFrames/>
          }
        }
      />
    );
  };
