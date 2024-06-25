import { FC, Fragment } from "react";
import clsx from "clsx";
import { VideoMusicSaveTimerCurrentRow } from "~/pages/video/music/save/timer/current/row";
import { TProgressKey } from "~/pages/video/music/_context/init/refs/progress/types";
const UNITS = ["m", "s", "ms"] as const;
export const VideoMusicSaveTimerCurrent: FC<{
  seconds: number;
  stepsCount?: number;
  progressKey:TProgressKey
}> = ({ seconds, stepsCount,progressKey }) => {
  return (
    <div
      className={clsx(
        "row",
        "font-slab text-left text-sm text-white dark:text-gray"
      )}
    >
      {UNITS.map((v, index) => (
        <Fragment key={v}>
          {index !== 0 && <>:</>}
          <VideoMusicSaveTimerCurrentRow
            timerKey={v}
            seconds={seconds}
            stepsCount={stepsCount}
            progressKey={progressKey}

          />
        </Fragment>
      ))}
    </div>
  );
};
