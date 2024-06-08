import { FC } from "react";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { PlaybackTimer } from "~/components/playback/timer";
import { VideoMusicPlaybackTimerCurrent } from "~/pages/video/music/playback/timer/current";

export const VideoMusicPlaybackTimer: FC =
  () => {
    const seconds =
      usePicVideoReadSeconds();

    return (
      <PlaybackTimer
        durationProps={{
          elapsed: seconds,
          unit: "seconds",
        }}
        TimerCurrentFc={
          VideoMusicPlaybackTimerCurrent
        }
      />
    );
  };
