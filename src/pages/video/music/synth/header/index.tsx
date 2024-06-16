import type { FC } from "react";
import { BackgroundGlass } from "~/components/layout/background/glass";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
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
    } = useVideoPlayerStyle();

    return (
      <div
        className="relative column-start grow"
        style={{
          width: width + s.m025,
          // gap: s.m0125,
          // paddingBottom: s.m05,
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
