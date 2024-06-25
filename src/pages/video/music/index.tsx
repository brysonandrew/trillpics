import { Helmet } from "react-helmet-async";
import { VideoMusicSave } from "~/pages/video/music/save/index";
import { VideoMusicSynth } from "~/pages/video/music/synth";
import { VideoMusicDrums } from "~/pages/video/music/drums";
import { MusicInitProvider } from "~/pages/video/music/_context/init";
import { MusicReadyProvider } from "~/pages/video/music/_context/ready";
import { MusicRecorderProvider } from "~/pages/video/music/_context/recorder";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { MusicControlsButtons } from "~/pages/video/music/controls/buttons";
import { GlassSidebar } from "~/pages/video/music/layout/glass/sidebar";
import { GlassMain } from "~/pages/video/music/layout/glass/main";
import { LayoutScroll } from "~/pages/video/music/layout/scroll";
import { LayoutBorderTop } from "~/pages/video/music/layout/border-top";
import { LayoutView } from "~/pages/video/music/layout/view";
import { MusicLayoutRow } from "~/pages/video/music/layout/row/sliders";
import { LayoutStickyTop } from "~/pages/video/music/layout/sticky/top";
import { LayoutStickyMid } from "~/pages/video/music/layout/sticky/mid";
import { LayoutStickyBottom } from "~/pages/video/music/layout/sticky/bottom";
import { MusicControlsButtonsMenu } from "~/pages/video/music/controls/buttons/menu";
import { MusicSynthNodes } from "~/pages/video/music/synth/nodes";
import { MusicScale } from "~/pages/video/music/synth/scale";
import { BeatsMaster } from "~/pages/video/music/drums/master";

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

          <LayoutScroll>
            <LayoutView>
              <LayoutStickyTop>
                <GlassSidebar />
                <GlassMain />
                <VideoMusicSynth />
                <MusicSynthNodes />
              </LayoutStickyTop>

              <MusicScale />

              <LayoutStickyMid>
                <VideoMusicDrums />
              </LayoutStickyMid>

              <MusicLayoutRow>
                <BeatsMaster />
              </MusicLayoutRow>

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
