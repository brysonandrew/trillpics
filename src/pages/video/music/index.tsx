import { Helmet } from "react-helmet-async";
import { VideoMusicSave } from "~/pages/video/music/save/index";
import { VideoMusicSynth } from "~/pages/video/music/synth";
import { VideoMusicDrums } from "~/pages/video/music/drums";
import { MusicRecorderProvider } from "~/pages/video/music/_context/recorder";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { MusicControls } from "~/pages/video/music/controls";
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
import { MusicSynthComposition } from "~/pages/video/music/synth/composition";
import { DrumsSettings } from "~/pages/video/music/drums/settings";

export const VideoMusic = () => {
  return (
    // <MusicInitProvider>
    //   <MusicReadyProvider>
    <MusicRecorderProvider>
      <Helmet>
        <title>
          Trill Pics | Music Sequencer
        </title>
      </Helmet>
      <PicBackdrop />
      <LayoutBorderTop />
      {/* <MusicControls /> */}

      <LayoutScroll>
        <LayoutView>
          <LayoutStickyTop>
            <GlassSidebar />
            <GlassMain />
            <VideoMusicSynth />
          </LayoutStickyTop>
          <MusicSynthComposition />
          <MusicSynthNodes />

          <LayoutStickyMid>
            <VideoMusicDrums />
          </LayoutStickyMid>

          <MusicLayoutRow>
            <DrumsSettings />
          </MusicLayoutRow>

          <LayoutStickyBottom>
            <VideoMusicSave />
          </LayoutStickyBottom>
        </LayoutView>
      </LayoutScroll>
      <MusicControlsButtonsMenu />
    </MusicRecorderProvider>
    //   </MusicReadyProvider>
    // </MusicInitProvider>
  );
};
