import {
  useEffect,
  useRef,
} from "react";
import { Helmet } from "react-helmet-async";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { boxRadius } from "~uno/rules/box/radius";
import { VideoMusicSave } from "~/pages/video/music/save/index";
import { VideoMusicSynth } from "~/pages/video/music/synth";
import { VideoMusicDrums } from "~/pages/video/music/drums";
import { MusicInitProvider } from "~/pages/video/music/_context/init";
import { MusicReadyProvider } from "~/pages/video/music/_context/ready";
import { MusicRecorderProvider } from "~/pages/video/music/_context/recorder";
import clsx from "clsx";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { useAddRandomEffect } from "~/hooks/pic/add-random/effect";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { BeatsMaster } from "~/pages/video/music/drums/master";
import { NodesOscillator } from "~/pages/video/music/synth/nodes/oscillator/sliders";
import { VideoMusicSaveProgress } from "~/pages/video/music/save/progress";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { MusicSequenceSliders } from "~/pages/video/music/synth/sequence/sliders";
import { MusicScale } from "~/pages/video/music/synth/scale";
import { MusicControlsButtons } from "~/pages/video/music/controls/buttons";
import { MusicControlsSliders } from "~/pages/video/music/controls/sliders";
import { GlassSidebar } from "~/pages/video/music/layout/glass/sidebar";
import { GlassMain } from "~/pages/video/music/layout/glass/main";
import { LayoutScroll } from "~/pages/video/music/layout/scroll";
import { LayoutBorderTop } from "~/pages/video/music/layout/border-top";
import { LayoutView } from "~/pages/video/music/layout/view";
import { LayoutRowSliders } from "~/pages/video/music/layout/row/sliders";
import { LayoutViewBackground } from "~/pages/video/music/layout/view/background";
import { LayoutStickyTop } from "~/pages/video/music/layout/sticky/top";
import { LayoutStickyMid } from "~/pages/video/music/layout/sticky/mid";
import { LayoutStickyBottom } from "~/pages/video/music/layout/sticky/bottom";
import { MusicControlsButtonsMenu } from "~/pages/video/music/controls/buttons/menu";

export const VideoMusic = () => {
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
          <LayoutBorderTop />
          <MusicControlsButtons />
          {/* <LayoutViewBackground /> */}
          <LayoutScroll>
            <LayoutView>
              {/* <div
                className="relative column-stretch"
                style={{

                  gap: box.m0125,
                  paddingTop: box.m15,
                  paddingBottom:
                    box.m0125,
                }}
              >
                <div className="absolute inset-x-0 -inset-y-32 bg-gradient-to-t from-black to-black-01" />

                <MusicControlsSliders />
                <MusicSequenceSliders />
                <MusicScale />
              </div> */}
              <LayoutStickyTop>
                <GlassSidebar />
                <GlassMain />
                <VideoMusicSynth />
              </LayoutStickyTop>

              <LayoutRowSliders>
                <NodesOscillator />
              </LayoutRowSliders>

              <LayoutStickyMid>
                <VideoMusicDrums />
              </LayoutStickyMid>
              <LayoutRowSliders>
                <BeatsMaster />
              </LayoutRowSliders>

              <LayoutStickyBottom>
                <VideoMusicSave />
              </LayoutStickyBottom>
            </LayoutView>
          </LayoutScroll>
          <MusicControlsButtonsMenu />

        </MusicRecorderProvider>
      </MusicReadyProvider>
    </MusicInitProvider>
  );
};

/* <div
className="relative column-stretch bg-black-8 dark:bg-black-02"
style={{
  width: width ,
  paddingTop: box.m025,
  top: 0,
  left: -box.m0125,

  // paddingLeft: box.m0125,
  // paddingRight: box.m0125,

  borderRadius,
  // gap: box.m025 * 1.5,
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
