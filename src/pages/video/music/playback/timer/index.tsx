import { FC } from "react";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { PlaybackTimer } from "~/components/playback/timer";
import { VideoMusicPlaybackTimerCurrent } from "~/pages/video/music/playback/timer/current";
import { TimerDisplay } from "~/components/playback/timer/display";
import { resolveCompositeKey } from "@brysonandrew/utils-key";

type TProps = { isPlaying: boolean };
export const VideoMusicPlaybackTimer: FC<
  TProps
> = ({ isPlaying }) => {
  const seconds =
    usePicVideoReadSeconds();

  if (!seconds) return null;

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
          : () => (
              <TimerDisplay
                elapsed={0}
                unit="seconds"
              />
            )
      }
    />
  );
};
