import { useState } from "react";
import { MotionValue } from "framer-motion";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicCell } from "~/hooks/pic/cell";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { TMain } from "~/context/types";

export const useMove = ({
  main,
  scrollY,
  isOnscreen,
}: {
  main: TMain;
  isOnscreen: boolean;
  scrollY: MotionValue;
}) => {
  const { isScrolling } =
    useTrillPicsStore(
      ({ isScrolling }) => ({
        isScrolling,
      })
    );
  const { endTimeout, timeoutRef } =
    useTimeoutRef();
  const [isCursorMove, setCursorMove] =
    useState(false);
  const [isIdle, setIdle] =
    useState(true);
  const { move } = usePicCell(main);
  const handleMove = (
    event: PointerEvent
  ) => {
    if (main.cursor.isDragging) return;
    endTimeout();
    if (!isIdle) {
      setIdle(false);
    }
    timeoutRef.current = setTimeout(
      () => {
        setIdle(true);
      },
      1
    );
    const currScrollY = scrollY.get();
    const mx = event.pageX;
    const my =
      event.pageY - currScrollY;
    const prevX = main.cursor.x.get();
    const prevY = main.cursor.y.get();

    const d = Math.sqrt(
      Math.pow(mx - prevX, 2) +
        Math.pow(my - prevY, 2)
    );
    if (Math.abs(d) > 1) {
      main.cursor.isHoverIdle = false;
      main.cursor.x.set(mx);
      main.cursor.y.set(my);
    }

    if (isOnscreen && !isScrolling) {
      move(mx, my);
      if (!isCursorMove) {
        setCursorMove(true);
      }
    }
  };

  useEventListener<"pointerenter">(
    "pointerenter",
    handleMove
  );

  useEventListener<"pointerover">(
    "pointerover",
    handleMove
  );

  useEventListener<"pointermove">(
    "pointermove",
    handleMove
  );

  return isIdle;
};
export type TUseMoveResult = ReturnType<
  typeof useMove
>;
