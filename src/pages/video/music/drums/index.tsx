import type { FC } from "react";
import { BEATS_PRESETS } from "~/hooks/music/beats/presets";
import { MusicBackground } from "~/pages/video/music/background";
import { MusicLayoutDrums } from "~/pages/video/music/drums/header";
import { VideoMusicGrid } from "~/pages/video/music/grid";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const VideoMusicDrums: FC =
  () => {
    const {
      sidebarWidthOffset,
      width,
    } = useVideoPlayerStyle();
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
          <MusicBackground
            boxStyle={{
              left: sidebarWidthOffset,
            }}
          />
          <MusicLayoutDrums />
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
