import type { FC } from "react";
import clsx from "clsx";
import { TimerDisplay } from "~/components/playback/timer/display";
import { TimerDisplayInit } from "~/components/playback/timer/display/init";
import { VideoMusicSaveTimerCurrent } from "~/pages/video/music/save/timer/current";
import { box } from "~uno/rules/box";
import { TProgressKey } from "~/pages/video/music/_context/refs/progress/types";

export type TVideoMusicHeaderTimerProps =
  {
    stepsCount?: number;
    isActive: boolean;
    isCooldown: boolean;
    seconds: number;
    progressKey: TProgressKey;
  };
export const VideoMusicHeaderTimer: FC<
  TVideoMusicHeaderTimerProps
> = ({
  stepsCount,
  isActive,
  isCooldown,
  seconds,
  progressKey,
}) => {
  

  const CurrTimer = isActive
    ? () => (
        <VideoMusicSaveTimerCurrent
          seconds={seconds}
          stepsCount={stepsCount}
          progressKey={progressKey}
        />
      )
    : isCooldown
    ? () => (
        <TimerDisplay
          elapsed={seconds}
          unit="seconds"
        />
      )
    : TimerDisplayInit;
  return (
    <div
      className={clsx(
        "row",
        "font-slab text-left text-sm text-white dark:text-gray"
      )}
      style={{
        gap: box._0125,
      }}
    >
      <CurrTimer />
    </div>
  );
};
