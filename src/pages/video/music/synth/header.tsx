import type { FC } from "react";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import { SelectStyled } from "~/components/inputs/select/styled";
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
import { SCALES } from "~/constants/scales";
import { PillB } from "~/components/buttons/pill/b";
import { IconsReload } from "~/components/icons/reload";
import { SynthReload } from "~/pages/video/music/synth/reload";
import { SynthOffsetLeft } from "~/pages/video/music/synth/offset/left";
import { SynthOffsetRight } from "~/pages/video/music/synth/offset/right";
import { SynthScale } from "~/pages/video/music/synth/scale";

export const VideoMusicSynthHeader: FC =
  () => {
    const { options, scaleKey } =
      useTrillPicsStore(
        ({ options, scaleKey }) => ({
          options,
          scaleKey,
        })
      );
    const s = boxSize();
    const handleUpdate: TUpdateSliderHandler =
      useSynthUpdate();
    const borderRadius = boxRadius();
    const playMidis = usePlayMidis();
    const {
      sidebarWidthOffset,
      width,
    } = useVideoPlayerStyle();

    return (
      <div
        className="relative row-space grow"
        style={{
          width: width + s.m025,
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
              ? IconsPlay
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
              <SelectStyled
                name="options.type"
                title="type"
                value={options.type}
                values={
                  WRITABLE_OSCILLATOR_TYPES
                }
                onValueChange={(
                  value
                ) =>
                  handleUpdate(
                    "options.type",
                    value
                  )
                }
              />
           <SynthScale/>
            </div>
          }
          rightContent={
            <div
              className="row relative"
              style={{
                gap: s.m025,
              }}
            >
              <SynthOffsetLeft />
              <SynthOffsetRight />

              <SynthReload />
            </div>
          }
        >
          Synth
        </MusicLayoutHeader>
      </div>
    );
  };
