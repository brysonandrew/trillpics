import {
  useEffect,
  useRef,
} from "react";
import { Helmet } from "react-helmet-async";
import { useVideoStyle } from "~/pages/video/style";
import { boxSize } from "~uno/rules/box/size";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { boxRadius } from "~uno/rules/box/radius";
import { VideoMusicPlayback } from "~/pages/video/music/save/index";
import { VideoMusicSynth } from "~/pages/video/music/synth";
import { Bpm } from "~/pages/video/music/bpm";
import { VideoMusicDrums } from "~/pages/video/music/beats";
import {
  MusicInitProvider,
  useMusicInitContext,
} from "~/pages/video/music/_context/init";
import { MusicReadyProvider } from "~/pages/video/music/_context/ready";
import { MusicRecorderProvider } from "~/pages/video/music/_context/recorder";
import clsx from "clsx";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { useAddRandomEffect } from "~/hooks/pic/add-random/effect";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { BeatsMaster } from "~/pages/video/music/beats/master";
import { MusicAll } from "~/pages/video/music/all";
import { MidisOscillator } from "~/pages/video/music/synth/oscillator";
import { Master } from "~/pages/video/music/master";
import { SequenceSlider } from "~/pages/video/music/synth/sequence/slider";
import { SynthDropdowns } from "~/pages/video/music/synth/dropdowns";
import { BeatsList } from "~/pages/video/music/beats/list";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { VideoMusicPlaybackProgress } from "~/pages/video/music/save/progress";

export const VideoMusic = () => {
  const {
    y,
    gap,
    left,
    width,
    sidebarWidth,
    screenHeight,
    sidebarWidthOffset,
    screen,
    beatsTop,
  } = useVideoStyle();
  const scrollRef =
    useRef<HTMLDivElement | null>(null);
  const s = boxSize();
  const borderRadius = boxRadius();

  useAddRandomEffect();
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight;
    }
  }, []);
  return (
    <MusicInitProvider scrollRef={scrollRef}>
      <MusicReadyProvider>
        <MusicRecorderProvider>
          <Helmet>
            <title>
              Trill Pics | Music
              Sequencer
            </title>
          </Helmet>
          <PicBackdrop />
          <LinesHorizontal
            style={{
              position: "absolute",
              top: beatsTop + s.m,
              bottom: s.m15,
              left: left - s.m15,
              width: s.m15,
            }}
          />
          <MusicAll />
          <VideoMusicPlaybackProgress />

          <div
            className={clsx(
              "fill overflow-auto h-screen w-full",
              "flex flex-row items-stretch justify-stretch"
            )}
            ref={scrollRef}
          >
            <div
              className="absolute column-stretch grow"
              style={{
                left:
                  left -
                  s.m0125 -
                  s.m0625,
                gap,
                width: width + s.m025,
                paddingTop: y,
                height:
                  screen.height * 2.4,
              }}
            >
              <div
                className="relative column-stretch"
                style={{
                  gap,
                  paddingTop:
                    s.m05 + s.m0125,
                  paddingBottom: s.m05,
                }}
              >
                <div className="absolute inset-x-0 -inset-y-32 bg-gradient-to-t from-black to-black-01" />
                <SequenceSlider optionsKey="beats" />
                <SequenceSlider optionsKey="interval" />
                <SequenceSlider optionsKey="duration" />
                <SequenceSlider optionsKey="repeat" />
                <Bpm />
                <Master />
              </div>

              <div
                className="sticky column-stretch z-20 bg-black-8 dark:bg-black"
                style={{
                  width: width + s.m025,
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
                    // height: `calc(100vh - ${
                    //   y * 1.5
                    // }px)`,
                    height:
                      screenHeight,
                  }}
                >
                  <BackgroundGlass
                    style={{
                      borderTopLeftRadius:
                        borderRadius,
                      borderBottomLeftRadius:
                        borderRadius,
                    }}
                  />
                </aside>

                <BackgroundGlass
                  boxStyle={{
                    left: sidebarWidthOffset,
                    // height: `calc(100vh - ${
                    //   y * 1.5
                    // }px)`,
                    // right: s.m0125,
                    height:
                      screenHeight,
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
                <div className="absolute inset-x-0 -inset-y-6 bg-gradient-to-l from-black to-black-05" />
                <SynthDropdowns />
                <MidisOscillator />
              </div>

              <div
                className="sticky column-stretch z-10 bg-black-8 dark:bg-black"
                style={{
                  width: width + s.m025,
                  top:
                    beatsTop + s.m025,
                  bottom: -s.m,
                }}
              >
                <VideoMusicDrums />
              </div>

              <div
                className="relative column-stretch"
                style={{
                  gap,
                }}
              >
                <div className="absolute inset-x-0 -inset-y-6 bg-gradient-to-l from-black to-black-05" />
                <BeatsList />
                <BeatsMaster />
              </div>

              <div
                className="sticky column-stretch bg-black-8 dark:bg-black z-10"
                style={{
                  top:
                    beatsTop +
                    s.m4 -
                    s.m0125,
                  gap: s.m0125,
                  width: width + s.m025,

                  bottom: 0,
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
