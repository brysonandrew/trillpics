import { FC } from "react";
import { PlaybackTimer } from "~/components/playback/timer";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TimerDisplayInit } from "~/components/playback/timer/display/init";
import { VideoMusicPlaybackTimerCurrent } from "~/pages/video/music/record/timer/current";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { TimerDisplay } from "~/components/playback/timer/display";

type TProps = {
  isPlaying: boolean;
};
export const VideoMusicPlaybackTimer: FC<
  TProps
> = () => {
  const {
    isRecording,
    isRecordingCooldown,
    videoSeconds
  } = useMusicRecorderContext();
  return (
    <PlaybackTimer
      key={resolveCompositeKey(
        "timer",
        `recording:${isRecording}`
      )}
      durationProps={{
        elapsed: videoSeconds,
        unit: "seconds",
      }}
      TimerCurrentFc={
        isRecording
          ? () => (
              <VideoMusicPlaybackTimerCurrent
                seconds={videoSeconds}
              />
            )
          : isRecordingCooldown
          ? () => (
              <TimerDisplay
                elapsed={videoSeconds}
                unit="seconds"
              />
            )
          : TimerDisplayInit
      }
    />
  );
};
