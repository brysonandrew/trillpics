import { Helmet } from "react-helmet-async";
import { VideoPlayer_Backdrop } from "~/pages/video/player/_backdrop";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useSoundContext } from "~/shell/global/sound";
import { boxSize } from "~uno/rules/box/size";
import { MusicLayoutDrums } from "~/pages/video/music/drums";
import { MusicBackground } from "~/pages/video/music/background";
import { boxRadius } from "~uno/rules/box/radius";
import { VideoMusicPlayback } from "~/pages/video/music/playback/index";
import { SynthwaveProvider } from "@state/Provider";
import { SynthwaveOptions } from "@app/Options";
import { RowsBeats } from "~/pages/video/music/drums/beats";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { DrumsPresets } from "~/pages/video/music/drums/presets";
import { Bpm } from "~/pages/video/music/bpm";
import { PlayerBackground } from "~/pages/video/player/_background";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { PlaybackTimer } from "~/components/playback/timer";
import { VideoMusicPlaybackTimer } from "~/pages/video/music/playback/timer";

export const VideoMusic = () => {
  const {
    playerStyle,
    y,
    gap,
    left,
    width,
    screenHeight,
    sidebarWidth,
    sidebarWidthOffset,
  } = useVideoPlayerStyle();
  const { saveProgress } =
    useSoundContext();
  const s = boxSize();
  const borderRadius = boxRadius();
  return (
    <SynthwaveProvider>
      <Helmet>
        <title>
          Trill Pics | Music Sequencer
        </title>
      </Helmet>
      <VideoPlayer_Backdrop />
      <div
        // className="fill flex flex-row items-stretch justify-stretch"
        // style={{
        //   paddingTop: y,
        //   paddingBottom: y,
        //   gap,
        //   width,
        // }}
        className="fill  overflow-auto"
        style={{
          gap,
          // height:screenHeight
          // width,
        }}
      >
        <div
          // className="fill flex flex-row items-stretch justify-stretch"
          // style={{
          //   paddingTop: y,
          //   paddingBottom: y,
          //   gap,
          //   width,
          // }}
          className="relative flex flex-row items-stretch justify-stretch"
          style={{
            gap,
            // height:screenHeight
            // width,
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
              <SynthwaveOptions />
            </div>
            <div
              className="relative row"
              style={{
                gap: s.m0125 / 4,
                width,
                paddingRight: s.m05,
              }}
            >
              <MusicBackground
                boxStyle={{
                  left: sidebarWidthOffset,
                }}
              />
              <MusicLayoutDrums />
              <LinesHorizontal opacityClass="opacity-20" />

              <RowsBeats />
              <LinesHorizontal opacityClass="opacity-20" />

              {/* <h4 className="text-xs font-sans uppercase">preset</h4> */}
              <DrumsPresets />
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

            {/* <PlayerBackground /> */}
            {/* <TimerCurrentProgress
                    progress={
                      saveProgress
                    }
                    borderRadiusSize="l"
                    classValue="inset-y-4 inset-x-0"
                  /> */}
            {/* <PlaybackTimer/> */}
          </div>
        </div>
      </div>
      {/* <div style={{ height: 20 }} /> */}
    </SynthwaveProvider>
  );
};
