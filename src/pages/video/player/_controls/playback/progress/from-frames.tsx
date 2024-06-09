import { FC, memo } from "react";
import { useMotionValue } from "framer-motion";
import { useCurrentPlayerFrame } from "~/pages/video/player/_context/ready/hooks/use-current-player-frame";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";

export const TimerCurrentProgressFromFrames: FC =
  memo(() => {
    const { fps } =
      useContextPlayer_Init();
    const seconds =
      usePicVideoReadSeconds();
    const progress = useMotionValue(0);

    useCurrentPlayerFrame(
      (currentFrame) =>
        progress.set(
          currentFrame / (seconds * fps)
        )
    );
    return (
      <TimerCurrentProgress
        progress={progress}
      />
    );
  });
