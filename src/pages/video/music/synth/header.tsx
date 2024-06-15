import type { FC } from "react";
import { TUpdateSliderHandler } from "~/components/inputs/slider/row";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { MusicBackground } from "~/pages/video/music/background";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { useSynthUpdate } from "~/pages/video/music/synth/update";
import { IconsPlay } from "~/components/icons/playback/play";
import { useTrillPicsStore } from "~/store/middleware";
import { SynthReload } from "~/pages/video/music/synth/melody/reload";
import { SynthOffsetLeft } from "~/pages/video/music/synth/melody/offset/left";
import { SynthOffsetRight } from "~/pages/video/music/synth/melody/offset/right";
import { SynthIntervalUp } from "~/pages/video/music/synth/melody/interval/up";
import { SynthIntervalDown } from "~/pages/video/music/synth/melody/interval/down";
import { SynthRepeatDown } from "~/pages/video/music/synth/melody/repeat/down";
import { SynthRepeatUp } from "~/pages/video/music/synth/melody/repeat/up";
import { SynthType } from "~/pages/video/music/synth/type";
import { SynthScalePattern } from "~/pages/video/music/synth/scale/pattern";
import { SynthScaleKey } from "~/pages/video/music/synth/scale/key";
import { boxPy } from "~/utils/box/py";
import { PillBText } from "~/components/buttons/pill/b/text";
import { MusicLayout } from "~/pages/video/music/layout";
import { PlayerBackgroundMesh } from "~/pages/video/player/_background/mesh";
import { IconsStop } from "~/components/icons/playback/stop";

export const VideoMusicSynthHeader: FC =
  () => {
    const { synth } = useTrillPicsStore(
      ({ synth }) => ({
        synth,
      })
    );
    const s = boxSize();
    const handleUpdate: TUpdateSliderHandler =
      useSynthUpdate();
    const borderRadius = boxRadius();
    const playMidis = usePlayMidis();
    const {
      left,
      sidebarWidthOffset,
      width,
    } = useVideoPlayerStyle();

    return (
      <div
        className="relative column-start grow"
        style={{
          width: width + s.m025,
          gap: s.m025,
          paddingBottom: s.m05,
        }}
      >
        <MusicBackground
          boxStyle={{
            left: sidebarWidthOffset,
          }}
          style={{
            borderTopRightRadius:
              borderRadius,
          }}
        />
        <MusicLayoutHeader
          Icon={
            playMidis.isPlaying
              ? IconsStop
              : IconsPlay
          }
          onClick={() => {
            if (playMidis.isPlaying) {
              playMidis.stop();
            } else {
              playMidis.play();
            }
          }}
          leftContent={
            <div
              className="row relative"
              style={{
                gap: s.m025,
              }}
            >
              <SynthType />
              <SynthScaleKey />
              <SynthScalePattern />
            </div>
          }
          rightContent={<SynthReload />}
        >
          Synth
        </MusicLayoutHeader>

        <div
          className="row relative"
          style={{
            left: s.m05,
            // sidebarWidthOffset +
            // s.m05,
            gap: s.m05,
          }}
        >
          <div className="relative column text-xs py-2">
            <MusicLayout>
              <div className="text-sm">
                {synth.steps.length}
              </div>
            </MusicLayout>

            <div className="absolute -bottom-3.5 uppercase">
              steps
            </div>
          </div>
          <div
            className="row relative"
            style={{
              left: s.m05,
              gap: s.m025,
              paddingLeft: s.m025,
              paddingRight: s.m0125,
            }}
          >
            <PlayerBackgroundMesh />
            <MusicLayout>
              interval
            </MusicLayout>
            <SynthIntervalDown />

            <MusicLayout
              style={{ width: s.m }}
            >{`${
              synth.melody.interval > 0
                ? "+"
                : ""
            }${
              synth.melody.interval
            }`}</MusicLayout>
            <SynthIntervalUp />
          </div>
          <div
            className="row relative"
            style={{
              gap: s.m025,
              paddingLeft: s.m025,
              paddingRight: s.m0125,
            }}
          >
            <PlayerBackgroundMesh />
            <SynthRepeatDown />

            <MusicLayout>
              repeat
            </MusicLayout>
            <MusicLayout
              style={{ width: s.m }}
            >{`${
              synth.melody.repeat > 0
                ? "+"
                : ""
            }${
              synth.melody.repeat
            }`}</MusicLayout>
            <SynthRepeatUp />
          </div>
          <div
            className="row relative"
            style={{
              gap: s.m025,
              paddingLeft: s.m025,
              paddingRight: s.m0125,
            }}
          >
            <PlayerBackgroundMesh />
            <MusicLayout>
              offset
            </MusicLayout>
            <SynthOffsetLeft />
            <MusicLayout
              style={{ width: s.m }}
            >{`${
              synth.melody.offset > 0
                ? "+"
                : ""
            }${
              synth.melody.offset
            }`}</MusicLayout>
            <SynthOffsetRight />
          </div>
        </div>
      </div>
    );
  };
