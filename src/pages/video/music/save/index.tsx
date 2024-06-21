import { VideoMusicPlaybackSaveLog } from "~/pages/video/music/save/log";
import { VideoMusicPlaybackHeader } from "~/pages/video/music/save/header";

export const VideoMusicPlayback =
  () => {
    return (
      <>
        <VideoMusicPlaybackHeader />
        <VideoMusicPlaybackSaveLog />
      </>
    );
  };
