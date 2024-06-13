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
import { VideoMusicGrid } from "~/pages/video/music/grid";

export const VideoMusicSynthHeader: FC =
  () => {
    const { options, synthSteps } =
      useTrillPicsStore(
        ({ options, synthSteps }) => ({
          options,
          synthSteps,
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
          // paddingLeft: s.m0125,
          // paddingRight: s.m0125,
          width,
        }}
      >
        <MusicBackground
          boxStyle={{
            left: sidebarWidthOffset,
          }}
          style={{
            // borderTopLeftRadius:
            // borderRadius,
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
          rightContent={
            <div
          className="row relative"
        
        >
          <SelectStyled
            name="options.type"
            title="type"
            value={options.type}
            values={
              WRITABLE_OSCILLATOR_TYPES
            }
            onValueChange={(value) =>
              handleUpdate(
                "options.type",
                value
              )
            }
          />
        </div>
          }
        >
          Synth
        </MusicLayoutHeader>
        
        
      </div>
    );
  };
