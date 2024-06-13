import { FC } from "react";
import { VideoMusicPlaybackTimerCurrentRow } from "~/pages/video/music/record/timer/current/row";
const UNITS  = ["m", "s", "ms"] as const
export const VideoMusicPlaybackTimerCurrent: FC<{seconds:number}> =
  ({seconds}) => {
    return (
      <div className="row">
        {UNITS.map((v) => (
          <VideoMusicPlaybackTimerCurrentRow
          key={v}
            timerKey={v}
            seconds={seconds}
          />
        ))}
      </div>
    );
  };
