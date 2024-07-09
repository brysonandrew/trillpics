import { FC } from "react";
import { PlaybackTimer } from "~/components/playback/timer";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TimerDisplayInit } from "~/components/playback/timer/display/init";
import { VideoMusicSaveTimerCurrent } from "~/pages/video/music/save/timer/current";
import { useContextMusicRecorder } from "~/pages/video/music/_context/recorder";
import { TimerDisplay } from "~/components/playback/timer/display";
import { useMusicPlay } from "~/hooks/music/play";

type TProps = {
  stepsCount?: number;
};
export const VideoMusicSaveTimer: FC<
  TProps
> = ({ stepsCount }) => {
  const { videoSeconds } =
    useContextMusicRecorder();
  const musicPlay = useMusicPlay();
  const { isRecording } =
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
              <VideoMusicSaveTimerCurrent
                seconds={videoSeconds}
                stepsCount={stepsCount}
                progressKey="track"
              />
            )
          : false
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
