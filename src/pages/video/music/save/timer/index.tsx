import { FC } from "react";
import { PlaybackTimer } from "~/components/playback/timer";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TimerDisplayInit } from "~/components/playback/timer/display/init";
import { VideoMusicPlaybackTimerCurrent } from "~/pages/video/music/save/timer/current";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { TimerDisplay } from "~/components/playback/timer/display";
import { useMusicPlay } from "~/hooks/music/play";

type TProps = {
  stepsCount?: number;
};
export const VideoMusicPlaybackTimer: FC<
  TProps
> = ({ stepsCount }) => {
  const { videoSeconds } =
    useMusicRecorderContext();
  const musicPlay = useMusicPlay();
  const { isRecording, isCooldown } =
    musicPlay;
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
                stepsCount={stepsCount}
                progressKey="recorder"
              />
            )
          : isCooldown
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
