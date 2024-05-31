import { MotionValue } from "framer-motion";

export type TSign = -1 | 1;
export type TCursorOffset = {
  x: TSign;
  y: TSign;
};
export type TMotionPoint = {
  x: MotionValue;
  y: MotionValue;
};