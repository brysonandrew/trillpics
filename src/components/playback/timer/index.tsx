import { FC } from "react";
import clsx from "clsx";
import {
  TimerDisplay,
  TTimerDisplayProps,
} from "~/components/playback/timer/display";

type TProps = {
  TimerCurrentFc: FC;
  durationProps: TTimerDisplayProps;
};
export const PlaybackTimer: FC<
  TProps
> = ({
  TimerCurrentFc,
  durationProps,
}) => {
  return (
    <div
      className={clsx(
        "relative",
        "flex shrink-0 grow-0 items-center",
        "pt-1 px-2 rounded-lg",
        "bg-gray-5 dark:bg-black-3",
        "font-slab text-left text-sm text-white dark:text-gray",
        "_gradient-mesh",
        "pointer-events-none"
      )}
    >
      <div className="invert-20">
        <TimerCurrentFc />
      </div>
      <div className="flex">
        <span className="px-1 h-0">
          /
        </span>
        <TimerDisplay
          {...durationProps}
        />
      </div>
    </div>
  );
};
