import { Helmet } from "react-helmet-async";
import { VideoPlayer_Backdrop } from "~/pages/video/player/_backdrop";
import { useAddRandomEffect } from "~/hooks/pic/add-random/effect";
import { useVideoStyle } from "~/pages/video/style";
import { AudioPlaylist } from "~/pages/video/music/audio/uploaded/item/playlist";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoMusic = () => {
  const {
    playerStyle,
    screenHeight,
    y,
    gap,
  } = useVideoStyle();
  useAddRandomEffect();

  return (
    <>
      <Helmet>
        <title>
          Trill Pics | Music
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
            height: screenHeight,
          }}
        >
          <AudioPlaylist />
        </div>
      </div>

      <div style={{ height: y }} />
    </>
  );
};
