import type { FC } from "react";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { useContextReady } from "~/shell/ready/context";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const VideoMusicSaveProgress: FC =
  () => {
    const { progress } =
      useContextMusicInit();
    const { screen } =
      useContextReady();
    const {
      sidebarWidthOffset,
      y,
      screenHeight,
    } = useVideoStyle();
    return (
      <div
        className="fixed h-full"
        style={{
          top: y,
          left:
            sidebarWidthOffset + box.m025,
          borderRadius: box.radius.xl,
          width:
            screen.container.width -
            box.m2 -
            box.m05,
          height: screenHeight,
        }}
      >
        <TimerCurrentProgress
          progress={
            progress["track"]
          }
          borderRadius={box.radius.xl}
        />
        <div
          className="fill _gradient-mesh bg-black-05"
          style={{
            borderRadius: box.radius.xl,
          }}
        />
      </div>
    );
  };
