import { FC } from "react";
import { VideoMusicPlaybackTimerCurrentRow } from "~/pages/video/music/playback/timer/current/row";

export const VideoMusicPlaybackTimerCurrent: FC =
  () => {
    return (
      <div className="row">
        <VideoMusicPlaybackTimerCurrentRow timerKey="m" />
        :
        <VideoMusicPlaybackTimerCurrentRow timerKey="s" />
        :
        <VideoMusicPlaybackTimerCurrentRow timerKey="ms" />
      </div>
    );
  };
