import { useMemo } from "react";
import { useMotionValue } from "framer-motion";
import {
  TCursorOffset,
  TMotionPoint,
} from "~/context/hooks/move/types";

export type TCursorPosition =
  TMotionPoint & {
    isDragging: boolean;

    isOnGrid: boolean;
    isHoverIdle: boolean;
    prev: {
      column: null | number;
      row: null | number;
    };
    offset: TCursorOffset;
    label: TMotionPoint;
  };
export type TCursor = TCursorPosition;
export const useCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const labelX = useMotionValue(``);
  const labelY = useMotionValue(``);

  const cursor =
    useMemo<TCursor>(() => {
      return {
        x,
        y,
        isOnGrid: false,
        isDragging: false,
        isHoverIdle: false,
        prev: {
          column: null,
          row: null,
        },
        offset: {
          x: 1,
          y: -1,
        },
        label: {
          x: labelX,
          y: labelY,
        },
      };
    }, []);
  return cursor;
};
export type TUseCursorResult =
  ReturnType<typeof useCursor>;
