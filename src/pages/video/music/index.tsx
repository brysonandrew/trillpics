import { Helmet } from "react-helmet-async";
import { SoundSequencer } from "~/pages/video/music/sequencer";
import { VideoPlayer_Backdrop } from "~/pages/video/player/_backdrop";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { VideoMusicPlayback } from "~/pages/video/music/playback";

export const VideoMusic = () => {
  const { playerStyle, y, gap } =
    useVideoPlayerStyle();

  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Music Sequencer
        </title>
      </Helmet>
      <VideoPlayer_Backdrop />
      <div
        className="fill column-start justify-center lg:justify-start overflow-auto"
        style={{
          paddingTop: y,
          paddingBottom: y,
          gap,
        }}
      >
        <div
          className="relative"
          style={{
            ...playerStyle,
          }}
        >
          <PlayerBackgroundOpaque />
          <PlayerBackground />
          <SoundSequencer />
        </div>
        <VideoMusicPlayback />
      </div>
    </>
  );
};
