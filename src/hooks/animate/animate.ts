import {
  animate,
  MotionValue,
  ValueAnimationTransition,
} from "framer-motion";

export const useAnimate = (
  value: MotionValue,
  to: number,
  options: ValueAnimationTransition,
  axis: "x" | "y" = "x"
) => {
  const handler = () => {
    animate<number>(value, to, options);
  };
  return handler;
};
