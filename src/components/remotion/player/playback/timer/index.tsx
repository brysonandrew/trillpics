import { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { TimerDisplay } from "~/components/remotion/player/playback/timer/display";
import { TimerCurrent } from "~/components/remotion/player/playback/timer/current";
import { usePicVideo } from "~/hooks/pic/video";

export const PlaybackTimer: FC = () => {
  const { seconds, count } =
    usePicVideo();
  const { fps, isPlaying } =
    useTrillPicsStore(
      ({ fps, isPlaying }) => ({
        fps,
        isPlaying,
      })
    );

  return (
    <div className="relative flex shrink-0 grow-0 items-center text-left pointer-events-none">
      {isPlaying && <TimerCurrent />}
      <div className="flex brightness-80">
        {isPlaying && (
          <span className="px-1">
            /
          </span>
        )}
        <TimerDisplay
          frame={seconds * fps}
        />
      </div>
    </div>
  );
};
