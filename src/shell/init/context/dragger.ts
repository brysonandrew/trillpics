import { useMemo } from "react";
import {
  AnimationPlaybackControls,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";

export type TDraggerMotion = {
  navX: MotionValue<number>;
  x: MotionValue<number>;
  y: MotionValue<number>;
  x05: MotionValue<number>;
  y075: MotionValue<number>;
  y06: MotionValue<number>;
  prevY: number;
  animateY: null | AnimationPlaybackControls;
};
export const useDragger = () => {
  const navX = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const x05 = useTransform(
    x,
    (v) => v * 0.5
  );
  const y075 = useTransform(
    y,
    (v) => v * 1.4
  );

  const y06 = useTransform(
    y,
    (v) => v * 1.1
  );

  const dragger =
    useMemo<TDraggerMotion>(() => {
      return {
        navX,
        x,
        y,
        x05,
        y075,
        y06,
        prevY: 0,
        animateY: null,
      };
    }, []);
  return dragger;
};
