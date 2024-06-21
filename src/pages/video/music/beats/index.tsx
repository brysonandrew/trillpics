import type { FC } from "react";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { MusicLayoutDrums } from "~/pages/video/music/beats/header";
import { ChartsGrid } from "~/components/charts/grid";
import { useVideoStyle } from "~/pages/video/style";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";
import { BEATS_KEYS } from "~/hooks/music/beats/constants";
import { ChartsGridLinesHorizontal } from "~/components/charts/grid/lines/horizontal";

export const VideoMusicDrums: FC =
  () => {
    const {
      sidebarWidthOffset,
      width,
    } = useVideoStyle();
    const s = boxSize();
    const { beatsPresetKey } =
      useTrillPicsStore(
        ({ beatsPresetKey }) => ({
          beatsPresetKey,
        })
      );
    return (
      <>
        <div
          className="relative row-space"
          style={{
            width: width + s.m025,
          }}
        >
          <BackgroundGlass
            boxStyle={{
              left: sidebarWidthOffset,
            }}
          />
          <MusicLayoutDrums />
        </div>
        <ChartsGrid
        musicKey="beats"
          Background={
            ChartsGridLinesHorizontal
          }
          presets={
            BEATS_PRESETS[
              beatsPresetKey
            ]
          }
          includes={BEATS_KEYS}
        />
      </>
    );
  };
