import type { FC } from "react";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { useVideoStyle } from "~/pages/video/style";
import { boxRadius } from "~uno/rules/box/radius";
import { boxSize } from "~uno/rules/box/size";
import { VideoMusicSynthHeaderBottom } from "~/pages/video/music/synth/header/bottom";
import { VideoMusicSynthHeaderTop } from "~/pages/video/music/synth/header/top";

export const VideoMusicSynthHeader: FC =
  () => {
    const s = boxSize();
    const borderRadius = boxRadius();
    const {
      sidebarWidthOffset,
      width,
    } = useVideoStyle();

    return (
      <div
        className="relative column-start"
        style={{
          width: width + s.m025,
        }}
      >
        <BackgroundGlass
          boxStyle={{
            left: sidebarWidthOffset,
          }}
          style={{
            borderTopRightRadius:
              borderRadius,
          }}
        />

        <VideoMusicSynthHeaderTop />
        <VideoMusicSynthHeaderBottom />
      </div>
    );
  };
