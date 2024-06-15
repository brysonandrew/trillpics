import { VideoMusicPlaybackSaveInfo } from "~/pages/video/music/record/save-info";
import { VideoMusicPlaybackHeader } from "~/pages/video/music/record/header";
import { VideoMusicPlaybackProgress } from "~/pages/video/music/record/progress";
import { Calc } from "~/pages/video/music/record/header/calc";

export const VideoMusicPlayback =
  () => {
    return (
      <>
        <VideoMusicPlaybackHeader />
        <div>
          <VideoMusicPlaybackProgress />
          <VideoMusicPlaybackSaveInfo />
        </div>
      </>
    );
  };
