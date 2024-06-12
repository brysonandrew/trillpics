import type { FC } from "react";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { MusicBackground } from "~/pages/video/music/background";
import { RowsBeats } from "~/pages/video/music/drums/beats";
import { MusicLayoutDrums } from "~/pages/video/music/drums/header";
import { DrumsPresets } from "~/pages/video/music/drums/presets";
import { useVideoPlayerStyle } from "~/pages/video/player/style";

export const VideoMusicDrums: FC =
  () => {
    const { sidebarWidthOffset } =
      useVideoPlayerStyle();
    return (
      <>
        <MusicBackground
          boxStyle={{
            left: sidebarWidthOffset,
          }}
        />
        <MusicLayoutDrums />
        <LinesHorizontal opacityClass="opacity-20" />
        <RowsBeats />
        <LinesHorizontal opacityClass="opacity-20" />
        <DrumsPresets />
      </>
    );
  };
