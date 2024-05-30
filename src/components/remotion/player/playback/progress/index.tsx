import { FC, memo } from "react";
import { useCurrentPlayerFrame } from "~/pages/video/player/_context/ready/hooks/use-current-player-frame";
import { TDurationInFramesProps } from "~/types/props";
import { boxRadius } from "~/constants/box/radius";

type TProps = TDurationInFramesProps;
export const TimerCurrentProgress: FC<TProps> =
  memo(({ durationInFrames }) => {
    const currentFrame =
      useCurrentPlayerFrame();
    const progress =
      currentFrame / durationInFrames;
    const borderRadius = boxRadius();
    if (progress === 0) return null;
    return (
      <div
        style={{
          width: `${progress * 100}%`,
          borderRadius,
        }}
        className="absolute inset-1 _gradient-radial pointer-events-none"
      >
        {progress > 0 && (
          <div
            style={{
              borderRadius,
              opacity:
                (1 - progress) / 12 +
                0.2,
            }}
            className="absolute -inset-4 _gradient-radial-inverted blur-lg"
          />
        )}
      </div>
    );
  });
