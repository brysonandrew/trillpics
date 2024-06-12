import { FC, memo } from "react";
import { useCurrentPlayerFrame } from "~/pages/video/player/_context/ready/hooks/use-current-player-frame";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { TimerDisplay } from "~/components/playback/timer/display";
import { useInitContext } from "~/shell/init/context";

export const TimerCurrentProgressFromFrames: FC =
  memo(() => {
    const { fps } =
      useContextPlayer_Init();
    const { main } = useInitContext();
    const seconds =
      usePicVideoReadSeconds();

    const currFrame =
      useCurrentPlayerFrame(
        (currentFrame) => {
          main.timer.set(
            currentFrame /
              (seconds * fps)
          );
        }
      );

    return (
      <TimerDisplay
        elapsed={currFrame}
        unit="frames"
      />
    );
  });
