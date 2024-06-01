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
    scrollY: AnimationPlaybackControls | null;
  };
  value: {
    shuffle: MotionValue<number>;
    addRandom: MotionValue<number>;
    x: MotionValue<number>;
    y: MotionValue<number>;
    scrollY: MotionValue<number>;
  };
};
export type TBlurVariant =
  keyof TBlur["control"];
export const useBlur = () => {
  const shuffle = useMotionValue(0);
  const addRandom = useMotionValue(0);
  const blurX = useMotionValue(0);
  const blurY = useMotionValue(0);
  const scrollY = useMotionValue(0);

  const blur = useMemo(() => {
    return {
      control: {
        shuffle: null,
        addRandom: null,
        x: null,
        y: null,
        scrollY: null,
      },
      value: {
        shuffle,
        addRandom,
        x: blurX,
        y: blurY,
        scrollY,
      },
    };
  }, []);
  return blur;
};
