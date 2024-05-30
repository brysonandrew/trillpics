import { useMemo } from "react";
import {
  AnimationPlaybackControls,
  MotionValue,
  useMotionValue,
} from "framer-motion";

export type TBlur = {
  control: {
    x: AnimationPlaybackControls | null;
    y: AnimationPlaybackControls | null;
  };
  value: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};
export const useBlur = () => {
  const blurX = useMotionValue(0);
  const blurY = useMotionValue(0);
  const blur = useMemo<TBlur>(() => {
    return {
      control: {
        x: null,
        y: null,
      },
      value: {
        x: blurX,
        y: blurY,
      },
    };
  }, []);
  return blur;
};
export type TUseBlurResult = ReturnType<
  typeof useBlur
>;
