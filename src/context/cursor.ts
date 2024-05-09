import { useMemo } from "react";
import {
  MotionValue,
  useMotionValue,
} from "framer-motion";

export type TCursorCell = {
  row: number;
  column: number;
};
export type TCursorPosition = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};
export type TCursor = TCursorCell &
  TCursorPosition;
export const useCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const cursor =
    useMemo<TCursor>(() => {
      return {
        row: 0,
        column: 0,
        x: cursorX,
        y: cursorY,
      };
    }, []);
  return cursor;
};
export type TUseCursorResult =
  ReturnType<typeof useCursor>;
