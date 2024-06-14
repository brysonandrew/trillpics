import { Helmet } from "react-helmet-async";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { boxSize } from "~uno/rules/box/size";
import { MusicBackground } from "~/pages/video/music/background";
import { boxRadius } from "~uno/rules/box/radius";
import { VideoMusicPlayback } from "~/pages/video/music/record/index";
import { VideoMusicSynth } from "~/pages/video/music/synth";
import { Bpm } from "~/pages/video/music/bpm";
import { VideoMusicDrums } from "~/pages/video/music/drums";
import { MusicInitProvider } from "~/pages/video/music/_context/init";
import { MusicReadyProvider } from "~/pages/video/music/_context/ready";
import { MusicRecorderProvider } from "~/pages/video/music/_context/recorder";
import clsx from "clsx";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { VideoMusicSynthMulti } from "~/pages/video/music/synth/multi";
import { VideoMusicSynthSingle } from "~/pages/video/music/synth/single";

export const VideoMusic = () => {
  const {
    playerStyle,
    y,
    gap,
    left,
    width,
    sidebarWidth,
    sidebarWidthOffset,
    screen,
  } = useVideoPlayerStyle();
  const s = boxSize();
  const borderRadius = boxRadius();
  return (
    <MusicInitProvider>
      <MusicReadyProvider>
        <MusicRecorderProvider>
          <Helmet>
            <title>
              Trill Pics | Music
              Sequencer
            </title>
          </Helmet>
          <PicBackdrop />
          <div
            className={clsx(
              "fill overflow-auto h-screen w-full",
              "flex flex-row items-stretch justify-stretch"
            )}
          >
            <div
              className="absolute column-stretch grow"
              style={{
                left:left-s.m0125-s.m0625,
                gap,
                width:width+s.m025,
                paddingTop: y,
                paddingBottom: y * 1.5,
                height:
                  screen.height * 2,
              }}
            >
              <div
                className="sticky column-stretch z-20 bg-black-8 dark:bg-black"
                style={{
                  width:width+s.m025,
                  top: y,
                  borderTopRightRadius:
                    borderRadius,
                  borderTopLeftRadius:
                    borderRadius,
                }}
              >
                <aside
                  className="flex absolute grow h-full pointer-events-none"
                  style={{
                    left: 0,
                    width: sidebarWidth,
                    gap,
                    top: 0,
                    height: `calc(100vh - ${
                      y * 1.5
                    }px)`,
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
                <MusicBackground
                  boxStyle={{
                    left: sidebarWidthOffset,
                    height: `calc(100vh - ${
                      y * 1.5
                    }px)`,
                  }}
                  style={{
                    borderTopRightRadius:
                      borderRadius,
                    borderBottomRightRadius:
                      borderRadius,
                  }}
                />
                <VideoMusicSynth />
              </div>
              <div
                className="relative column-stretch"
                style={{
                  gap,
                }}
              >
                <div className="absolute inset-x-0 -inset-y-6 bg-gradient-to-b from-black to-black-05" />
                <VideoMusicSynthSingle />
                <VideoMusicSynthMulti />
              </div>

              <div
                className="sticky column-stretch z-10 bg-black-8 dark:bg-black"
                style={{
                  width:width+s.m025,
                  gap: s.m025 * 1.5,
                  top:
                    y +
                    s.m3 +
                    s.m05 +
                    s.m0125,
                  bottom:
                    s.m25 + s.m025+s.m0125,
                }}
              >
                <VideoMusicDrums />
              </div>

              <div className="relative column-stretch">
                <div className="absolute inset-x-0 -inset-y-6 bg-gradient-to-b from-black to-black-05" />
                <Bpm />
              </div>

              <div
                className="sticky column-stretch bg-black-8 dark:bg-black z-10"
                style={{
                  top:
                    y +
                    s.m8 -
                    s.m025 -
                    s.m0125,
                  gap: s.m05,
                  width:width+s.m025,
                  bottom: s.m,
                  borderBottomLeftRadius:
                    borderRadius,
                  borderBottomRightRadius:
                    borderRadius,
                }}
              >
                <VideoMusicPlayback />
              </div>
            </div>
          </div>
        </MusicRecorderProvider>
      </MusicReadyProvider>
    </MusicInitProvider>
  );
};

/* <div
className="relative column-stretch bg-black-8 dark:bg-black-02"
style={{
  width: width ,
  paddingTop: s.m025,
  top: 0,
  left: -s.m0125,

  // paddingLeft: s.m0125,
  // paddingRight: s.m0125,

  borderRadius,
  // gap: s.m025 * 1.5,
}}
> */
{
  /* <div
                  className={clsx(
                    "absolute inset-0 bg-black-8 dark:bg-black-7 rounded-lg"
                  )}
                  style={{
                    borderBottomRightRadius:
                      borderRadius,
                    borderBottomLeftRadius:
                      borderRadius,
                  }}
                /> */
}
