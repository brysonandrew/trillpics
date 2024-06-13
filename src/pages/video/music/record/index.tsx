import { VideoMusicPlaybackSaveInfo } from "~/pages/video/music/record/save-info";
import { VideoMusicPlaybackHeader } from "~/pages/video/music/record/header";
import { BackgroundMesh } from "~/components/layout/background/mesh";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { boxSize } from "~uno/rules/box/size";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";

export const VideoMusicPlayback =
  () => {
    const s = boxSize();
    const { width, left, screen } =
      useVideoPlayerStyle();

    const { saveProgress } =
      useMusicInitContext();
    // const left = s.m025;

    return (
      <>
        <VideoMusicPlaybackHeader />
        {/* <div
          className="relative h-4 left-0"
          style={{
            left,
            width: width - left - s.m0125,
          }}
        >
        
        </div> */}
        <VideoMusicPlaybackSaveInfo />

        <div
          className="relative h-4"
          style={{
            // paddingLeft: s.m05,
            // paddingRight: s.m05,
            left: s.m05,//-left + s.m05,
            width: screen.container.width - s.m4+s.m05,
          }}
        >
          {/* <PlayerBackgroundOpaque/> */}
          <TimerCurrentProgress
            progress={saveProgress}
          />
          <BackgroundMesh />
        </div>
      </>
    );
  };
