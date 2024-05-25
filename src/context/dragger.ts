import { useMemo } from "react";
import {
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";

export type TDraggerMotion = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  x025: MotionValue<number>;
  y075: MotionValue<number>;
  y06: MotionValue<number>;
};
export const useDragger = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const x025 = useTransform(
    x,
    (v) => v *0.25
  );
  const y075 = useTransform(
    y,
    (v) => v * 0.75
  );

  const y06 = useTransform(
    y,
    (v) => v * 0.6
  );



  const dragger =
    useMemo<TDraggerMotion>(() => {
      return {
        x,
        y,
        x025,
        y075,
        y06,
      };
    }, []);
  return dragger;
};
