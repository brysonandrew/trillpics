import { useState } from "react";
import { MotionValue } from "framer-motion";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicCell } from "~/hooks/pic/cell";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { TMain } from "~/context/types";
import { useCursorOffset } from "~/context/hooks/move/offset";
import { TITLE_HOVER_KEY } from "~/pics/header/left";

export const useMove = ({
  main,
  scrollY,
  isOnscreen,
}: {
  main: TMain;
  isOnscreen: boolean;
  scrollY: MotionValue;
}) => {
  const { hoverKeys, isScrolling, isIdle, set } =
    useTrillPicsStore(
      ({
        hoverKeys,
        isScrolling,
        isIdle,
        set,
      }) => ({
        hoverKeys,
        isScrolling,
        isIdle,
        set,
      })
    );
  const { endTimeout, timeoutRef } =
    useTimeoutRef();
  const [isCursorMove, setCursorMove] =
    useState(false);
  const { move } = usePicCell(main,scrollY);
  const handler = useCursorOffset(main);

  const handleMove = (
    event: PointerEvent
  ) => {
    endTimeout();
    if (isIdle && !hoverKeys.includes(TITLE_HOVER_KEY)) {
      set({ isIdle: false });
    }
    timeoutRef.current = setTimeout(
      () => {
        set({ isIdle: true, hoverKeys: [] });
        main.cursor.isDragging = false;
      },
      60000
    );
    const mx = event.pageX;
    const my =
      event.pageY;

      handler({ nextX:mx, nextY:my });

    const prevX = main.cursor.x.get();
    const prevY = main.cursor.y.get();

    const d = Math.sqrt(
      Math.pow(mx - prevX, 2) +
        Math.pow(my - prevY, 2)
    );
    if (Math.abs(d) > 1) {
      main.cursor.isHoverIdle = false;
      // console.log(mx, my, 'update');

      main.cursor.x.set(mx);
      main.cursor.y.set(my);
    }
    if (main.cursor.isDragging || hoverKeys.length > 0) return;

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
