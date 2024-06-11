import { Helmet } from "react-helmet-async";
import { MusicRows } from "~/pages/video/music/rows";
import { VideoPlayer_Backdrop } from "~/pages/video/player/_backdrop";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { VideoMusicPlayback } from "~/pages/video/music/playback";
import { useSoundContext } from "~/shell/global/sound";
import { boxSize } from "~uno/rules/box/size";

export const VideoMusic = () => {
  const { playerStyle, y, gap } =
    useVideoPlayerStyle();
  const { saveProgress } =
    useSoundContext();
    const s = boxSize()
  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Music Sequencer
        </title>
      </Helmet>
      <VideoPlayer_Backdrop />
      <div
        className="fill row-start items-stretch justify-stretch"
        style={{
          paddingTop: y,
          paddingBottom: y,
          gap,
        }}
      >
        <aside
          className="relative column-start bg-red"
          style={{
            left:playerStyle.left,
            width:s.m,
            gap,
          }}
        >
                 <PlayerBackgroundOpaque />
                 <PlayerBackground />
       <div>hi</div>
        </aside>
        <div
          className="relative column-start"
          style={{
            ...playerStyle,
            gap,
          }}
        >
          <PlayerBackgroundOpaque />
          <PlayerBackground />
          <MusicRows />
        </div>
        <VideoMusicPlayback />
        {/* <div style={{ height: 20 }} /> */}
        {/* <div className="relative bg-red w-full" style={{ height: 20 }} >
        <PlayerBackground />
        <TimerCurrentProgress
            progress={saveProgress}
            borderRadiusSize="l"
            classValue="inset-y-1 inset-x-0"
          />
        </div> */}
      </div>
    </>
  );
};
