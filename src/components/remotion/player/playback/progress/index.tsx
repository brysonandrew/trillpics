import { FC, memo } from "react";
import { useCurrentPlayerFrame } from "~/hooks/remotion/use-current-player-frame";
import { TDurationInFramesProps } from "~/types/props";
import { Glow } from "~/components/decoration/glow";

type TProps = TDurationInFramesProps;
export const TimerCurrentProgress: FC<TProps> =
  memo(({ durationInFrames }) => {
    const currentFrame =
      useCurrentPlayerFrame();
    const progress =
      currentFrame / durationInFrames;
    return (
      <div
        style={{
          width: `${progress * 100}%`,
        }}
        className="fill _radial-gradient pointer-events-none m-1 rounded-lg"
      >
        <Glow classValue="fill" />
      </div>
    );
  });
