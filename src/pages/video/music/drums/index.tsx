import type { FC } from "react";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { MusicBackground } from "~/pages/video/music/background";
import { RowsBeats } from "~/pages/video/music/drums/beats";
import { MusicLayoutDrums } from "~/pages/video/music/drums/header";
import { DrumsPresets } from "~/pages/video/music/drums/presets";
import { VideoMusicGrid } from "~/pages/video/music/grid";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const VideoMusicDrums: FC =
  () => {
    const { left, width } =
      useVideoPlayerStyle();
    const { sidebarWidthOffset } =
      useVideoPlayerStyle();
    const s = boxSize();
    const { beatsPresetKey, set } =
      useTrillPicsStore(
        ({ beatsPresetKey, set }) => ({
          beatsPresetKey,
          set,
        })
      );
    return (
      <>
        <div
          className="relative row-space"
          style={{
            gap: s.m0125 / 4,
            width,
          }}
        >
          <MusicBackground
            boxStyle={{
              left: sidebarWidthOffset,
            }}
          />

          <MusicLayoutDrums />
          <RowsBeats />
        </div>
        <VideoMusicGrid
          presets={
            BEATS_PRESETS[
              beatsPresetKey
            ]
          }
        />
      </>
    );
  };
