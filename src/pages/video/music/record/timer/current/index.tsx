import { FC, Fragment } from "react";
import clsx from "clsx";
import { VideoMusicPlaybackTimerCurrentRow } from "~/pages/video/music/record/timer/current/row";
const UNITS = ["m", "s", "ms"] as const;
export const VideoMusicPlaybackTimerCurrent: FC<{
  seconds: number;
  stepsCount?: number;
}> = ({ seconds, stepsCount }) => {
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
          <VideoMusicPlaybackTimerCurrentRow
            timerKey={v}
            seconds={seconds}
            stepsCount={stepsCount}
          />
        </Fragment>
      ))}
    </div>
  );
};
