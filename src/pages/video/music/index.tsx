import { Helmet } from "react-helmet-async";
import { VideoMusicSave } from "~/pages/video/music/save/index";
import { VideoMusicSynth } from "~/pages/video/music/synth";
import { VideoMusicDrums } from "~/pages/video/music/drums";
import { MusicRecorderProvider } from "~/pages/video/music/_context/recorder";
import { PicBackdrop } from "~/pics/grid/pic/backdrop";
import { LayoutScroll } from "~/pages/video/music/layout/scroll";
import { LayoutBorderTop } from "~/pages/video/music/layout/border-top";
import { LayoutView } from "~/pages/video/music/layout/view";
import { MusicLayoutRow } from "~/pages/video/music/layout/row/sliders";
import { LayoutStickyTop } from "~/pages/video/music/layout/sticky/top";
import { LayoutStickyMid } from "~/pages/video/music/layout/sticky/mid";
import { LayoutStickyBottom } from "~/pages/video/music/layout/sticky/bottom";
import { MusicControlsButtonsMenu } from "~/pages/video/music/controls/buttons/menu";
import { MusicSynthNodes } from "~/pages/video/music/synth/nodes";
import { DrumsSettings } from "~/pages/video/music/drums/settings";

export const VideoMusic = () => {
  return (
    <MusicRecorderProvider>
      <Helmet>
        <title>
          Trill Pics | Music Sequencer
        </title>
      </Helmet>
      <PicBackdrop />
      <LayoutBorderTop />

      <LayoutScroll>
        <LayoutView>
          <LayoutStickyTop>
            {/* <GlassSidebar /> */}
            {/* <GlassMain /> */}
            <VideoMusicSynth />
          </LayoutStickyTop>
          {/* <MusicSynthComposition /> */}

          <MusicLayoutRow>
            <MusicSynthNodes />
          </MusicLayoutRow>

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
  );
};
