import type { FC } from "react";
import { boxSize } from "~uno/rules/box/size";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { BackgroundMesh } from "~/components/layout/background/mesh";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { useReadyContext } from "~/shell/ready/context";

export const VideoMusicPlaybackProgress: FC =
  () => {
    const s = boxSize();
    const { saveProgress } =
      useMusicInitContext();
    const { screen } =
      useReadyContext();
    return (
      <div
        className="relative"
        style={{
          left: s.m05,
          height: s.m05,
          width:
            screen.container.width -
            s.m4 +
            s.m025+s.m025,
        }}
      >
        <TimerCurrentProgress
          progress={saveProgress}
        />
        <BackgroundMesh
          style={{
            width: `calc(100% + ${
              s.m025 / 1.5
            }px)`,
          }}
        />
      </div>
    );
  };
