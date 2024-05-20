import {
  animate,
  DynamicAnimationOptions,
  MotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { useContextGrid } from "~/context";
import { isValue } from "~/utils/validation/is/value";

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
