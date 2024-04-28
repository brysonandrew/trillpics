import { FC, memo } from "react";
import { useCurrentPlayerFrame } from "~/hooks/remotion/use-current-player-frame";
import { TDurationInFramesProps } from "~/types/props";
import { LightingGlow } from "~/components/decoration/lighting/glow";
import { boxRadius } from "~/constants/box/style/radius";

type TProps = TDurationInFramesProps;
export const TimerCurrentProgress: FC<TProps> =
  memo(({ durationInFrames }) => {
    const currentFrame =
      useCurrentPlayerFrame();
    const progress =
      currentFrame / durationInFrames;
    const borderRadius = boxRadius();
    return (
      <div
        style={{
          width: `${progress * 100}%`,
          borderRadius,
        }}
        className="fill _radial-gradient pointer-events-none m-1"
      >
        <LightingGlow classValue="fill" />
      </div>
    );
  });
