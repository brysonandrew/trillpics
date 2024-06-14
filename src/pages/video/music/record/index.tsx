import { VideoMusicPlaybackSaveInfo } from "~/pages/video/music/record/save-info";
import { VideoMusicPlaybackHeader } from "~/pages/video/music/record/header";
import { VideoMusicPlaybackProgress } from "~/pages/video/music/record/progress";

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
