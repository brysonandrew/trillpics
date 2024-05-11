import { useMemo } from "react";
import {
  MotionValue,
  useMotionValue,
} from "framer-motion";

export type TCursorPosition = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  prev: {
    column: null | number;
    row: null | number;
  };
};
export type TCursor = TCursorPosition;
export const useCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const cursor =
    useMemo<TCursor>(() => {
      return {
        x: cursorX,
        y: cursorY,
        prev: {
          column: null,
          row: null,
        },
      };
    }, []);
  return cursor;
};
export type TUseCursorResult =
  ReturnType<typeof useCursor>;
