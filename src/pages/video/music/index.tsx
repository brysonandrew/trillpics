import { Helmet } from "react-helmet-async";
import { VideoPlayer_Backdrop } from "~/pages/video/player/_backdrop";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useSoundContext } from "~/shell/global/sound";
import { boxSize } from "~uno/rules/box/size";
import { MusicBackground } from "~/pages/video/music/background";
import { boxRadius } from "~uno/rules/box/radius";
import { VideoMusicPlayback } from "~/pages/video/music/playback/index";
import { VideoMusicSynth } from "~/pages/video/music/synth";
import { Bpm } from "~/pages/video/music/bpm";
import { VideoMusicDrums } from "~/pages/video/music/drums";
import { MusicProvider } from "@index";

export const VideoMusic = () => {
  const {
    playerStyle,
    y,
    gap,
    left,
    width,
    sidebarWidth,
  } = useVideoPlayerStyle();
  const s = boxSize();
  const borderRadius = boxRadius();
  return (
    <MusicProvider>
      <Helmet>
        <title>
          Trill Pics | Music Sequencer
        </title>
      </Helmet>
      <VideoPlayer_Backdrop />
      <div
        className="fill  overflow-auto"
        style={{
          gap,
        }}
      >
        <div
          className="relative flex flex-row items-stretch justify-stretch"
          style={{
            gap,
          }}
        >
          <aside
            className="absolute grow"
            style={{
              left: playerStyle.left,
              width: sidebarWidth,
              gap,
              top: y,
              bottom: y * 1.5,
            }}
          >
            <MusicBackground
              style={{
                borderTopLeftRadius:
                  borderRadius,
                borderBottomLeftRadius:
                  borderRadius,
              }}
            />
          </aside>
          <div
            className="relative column-stretch grow"
            style={{
              left,
              gap,
              width,
              paddingTop: y,
              paddingBottom: y * 1.5,
            }}
          >
            <div
              className="relative column-stretch"
              style={{
                width,
                gap: s.m025 * 1.5,
              }}
            >
              <VideoMusicSynth />
            </div>
            <div
              className="relative row"
              style={{
                gap: s.m0125 / 4,
                width,
                paddingRight: s.m05,
              }}
            >
              <VideoMusicDrums />
            </div>
            <div
              className="relative column-stretch"
              style={{
                gap: s.m05,
                width,
              }}
            >
              <Bpm />
              <VideoMusicPlayback />
            </div>
          </div>
        </div>
      </div>
    </MusicProvider>
  );
};
