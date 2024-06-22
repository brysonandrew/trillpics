import type { FC } from "react";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { useReadyContext } from "~/shell/ready/context";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const VideoMusicPlaybackProgress: FC =
  () => {
    const s = box;
    const { progress } =
      useMusicInitContext();
    const { screen } =
      useReadyContext();
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
            sidebarWidthOffset + s.m025,
          borderRadius: s.radius.xl,
          width:
            screen.container.width -
            s.m2 -
            s.m05,
          height: screenHeight,
        }}
      >
        <TimerCurrentProgress
          progress={
            progress["recorder"]
          }
          borderRadius={s.radius.xl}
        />
        <div
          className="fill _gradient-mesh bg-black-05"
          style={{
            borderRadius: s.radius.xl,
            right:-s.m0125,
          }}
        />
      </div>
    );
  };
