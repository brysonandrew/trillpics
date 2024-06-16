import type { FC } from "react";
import clsx from "clsx";
import { TimerDisplay } from "~/components/playback/timer/display";
import { TimerDisplayInit } from "~/components/playback/timer/display/init";
import { VideoMusicPlaybackTimerCurrent } from "~/pages/video/music/record/timer/current";
import { boxSize } from "~uno/rules/box/size";
import { TProgressKey } from "~/pages/video/music/_context/init/types";

type TProps = {
  stepsCount?: number;
  isActive: boolean;
  isCooldown: boolean;
  seconds: number;
  progressKey: TProgressKey;
};
export const VideoMusicHeaderTimer: FC<
  TProps
> = ({
  stepsCount,
  isActive,
  isCooldown,
  seconds,
  progressKey,
}) => {
  const s = boxSize();

  const CurrTimer = isActive
    ? () => (
        <VideoMusicPlaybackTimerCurrent
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
        gap: s.m0125,
        paddingTop: s.m0125,
      }}
    >
      <CurrTimer />
    </div>
  );
};
