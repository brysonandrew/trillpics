import type { FC } from "react";
import clsx from "clsx";
import { TimerDisplay } from "~/components/playback/timer/display";
import { TimerDisplayInit } from "~/components/playback/timer/display/init";
import { VideoMusicPlaybackTimerCurrent } from "~/pages/video/music/record/timer/current";
import { boxSize } from "~uno/rules/box/size";

type TProps = {
  seconds: number;
  stepsCount?:number
  isActive: boolean;
  isCooldown?: boolean;
};
export const VideoMusicHeaderTimer: FC<
  TProps
> = ({
  seconds,
  stepsCount,
  isActive,
  isCooldown,
}) => {
  const s = boxSize();
  const CurrTimer = isActive
    ? () => (
        <VideoMusicPlaybackTimerCurrent
          seconds={seconds}
          stepsCount={stepsCount}
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
