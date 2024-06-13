import { FC } from "react";
import { PlaybackTimer } from "~/components/playback/timer";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TimerDisplayInit } from "~/components/playback/timer/display/init";
import { VideoMusicPlaybackTimerCurrent } from "~/pages/video/music/record/timer/current";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { boxSize } from "~uno/rules/box/size";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";

type TProps = {
  isPlaying: boolean;
  seconds: number;
};
export const VideoMusicPlaybackTimer: FC<
  TProps
> = ({}) => {
  const { isRecording, seconds } =
    useMusicRecorderContext();
  return (
    <PlaybackTimer
      key={resolveCompositeKey(
        "timer",
        `recording:${isRecording}`
      )}
      durationProps={{
        elapsed: seconds,
        unit: "seconds",
      }}
      TimerCurrentFc={
        isRecording
          ? () => (
              <VideoMusicPlaybackTimerCurrent
                seconds={seconds}
              />
            )
          : TimerDisplayInit
      }
    />
  );
};
