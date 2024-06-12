import type { FC } from "react";
import { useMusicContext } from "@index";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import { SelectStyled } from "~/components/inputs/select/styled";
import { TUpdateSliderHandler } from "~/components/inputs/slider/row";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { MusicBackground } from "~/pages/video/music/background";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { useSynthUpdate } from "~/pages/video/music/synth/update";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsPause } from "~/components/icons/playback/pause";

export const VideoMusicSynthHeader: FC =
  () => {
    const { options } =
      useMusicContext();
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
      <div>
        <div
          className="relative row-space grow"
          style={{
            gap: s.m0125 / 4,
            paddingRight: s.m05,
            width,
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
          >
            Synth
          </MusicLayoutHeader>
          <LinesHorizontal opacityClass="opacity-20" />
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
      </div>
    );
  };
