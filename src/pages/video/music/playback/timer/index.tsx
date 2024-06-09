import { FC } from "react";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { PlaybackTimer } from "~/components/playback/timer";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { TimerDisplayInit } from "~/components/playback/timer/display/init";
import { VideoMusicPlaybackTimerCurrent } from "~/pages/video/music/playback/timer/current";

type TProps = { isPlaying: boolean };
export const VideoMusicPlaybackTimer: FC<
  TProps
> = ({ isPlaying }) => {
  const seconds =
    usePicVideoReadSeconds();

  return (
    <PlaybackTimer
      key={resolveCompositeKey(
        "timer",
        `${isPlaying}`
      )}
      durationProps={{
        elapsed: seconds,
        unit: "seconds",
      }}
      TimerCurrentFc={
        isPlaying
          ? VideoMusicPlaybackTimerCurrent
          : TimerDisplayInit
      }
    />
  );
};
