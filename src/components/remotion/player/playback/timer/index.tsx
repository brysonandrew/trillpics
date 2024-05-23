import { FC } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { TimerDisplay } from "~/components/remotion/player/playback/timer/display";
import { TimerCurrent } from "~/components/remotion/player/playback/timer/current";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";

export const PlaybackTimer: FC = () => {
  const seconds =
    usePicVideoReadSeconds();
  const { fps, isPlaying } =
    useTrillPicsStore(
      ({ fps, isPlaying }) => ({
        fps,
        isPlaying,
      })
    );

  return (
    <div className="relative flex h-0 shrink-0 grow-0 items-center text-left _outline-filter pointer-events-none">
      <TimerCurrent />
      <div className="flex brightness-80">
        <span className="px-1 h-0">
          /
        </span>
        <TimerDisplay
          frame={seconds * fps}
        />
      </div>
    </div>
  );
};
