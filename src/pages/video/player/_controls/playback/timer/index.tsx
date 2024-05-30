import { FC } from "react";
import { TimerDisplay } from "~/pages/video/player/_controls/playback/timer/display";
import { TimerCurrent } from "~/pages/video/player/_controls/playback/timer/current";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import clsx from "clsx";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";

export const PlaybackTimer: FC = () => {
  const seconds =
    usePicVideoReadSeconds();
    const { fps } =
    useContextPlayer_Init();
  return (
    <div
      className={clsx(
        "relative",
        "flex shrink-0 grow-0 items-center",
        "bg-black-9 dark:bg-black pt-1 px-2 rounded-lg",
        "font-slab text-left text-sm text-white dark:text-gray",
        "_outline-filter pointer-events-none"
      )}
    >
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
