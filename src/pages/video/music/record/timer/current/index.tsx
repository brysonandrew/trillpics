import { FC, Fragment } from "react";
import { VideoMusicPlaybackTimerCurrentRow } from "~/pages/video/music/record/timer/current/row";
const UNITS = ["m", "s", "ms"] as const;
export const VideoMusicPlaybackTimerCurrent: FC<{
  seconds: number;
}> = ({ seconds }) => {
  return (
    <div className="row">
      {UNITS.map((v, index) => (
        <Fragment key={v}>
          {index !== 0 && <>:</>}
          <VideoMusicPlaybackTimerCurrentRow
            timerKey={v}
            seconds={seconds}
          />
        </Fragment>
      ))}
    </div>
  );
};
