import { useMemo } from "react";
import {
  AnimationPlaybackControls,
  MotionValue,
  useMotionValue,
} from "framer-motion";

export type TBlur = {
  control: {
    shuffle: AnimationPlaybackControls | null;
    addRandom: AnimationPlaybackControls | null;
    x: AnimationPlaybackControls | null;
    y: AnimationPlaybackControls | null;
  };
  value: {
    shuffle: MotionValue<number>;
    addRandom: MotionValue<number>;
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};
export const useBlur = () => {
  const shuffle = useMotionValue(0);
  const addRandom = useMotionValue(0);
  const blurX = useMotionValue(0);
  const blurY = useMotionValue(0);
  const blur = useMemo(() => {
    return {
      control: {
        shuffle: null,
        addRandom: null,
        x: null,
        y: null,
      },
      value: {
        shuffle,
        addRandom,
        x: blurX,
        y: blurY,
      },
    };
  }, []);
  return blur;
};
