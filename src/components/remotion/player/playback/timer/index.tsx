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
    <div className="inline-flex bg-gray dark:bg-black px-2 rounded-lg relative font-sans text-sm text-white dark:text-white shrink-0 grow-0 items-center text-left _outline-filter pointer-events-none">
      <div className="invert-20">
        <TimerCurrent />
      </div>
      <div className="flex">
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
