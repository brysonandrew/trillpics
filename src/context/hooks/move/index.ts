import { useState } from "react";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicCell } from "~/hooks/pic/cell";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { TVirtualizeContext } from "~/context/types";
import { TITLE_HOVER_KEY } from "~/pics/header/left";

type TConfig = Pick<
  TVirtualizeContext,
  | "move"
  | "main"
  | "scrollTimeoutRef"
  | "isOnscreen"
>;
export const useMove = ({
  main,
  move,
  isOnscreen,
  scrollTimeoutRef,
}: TConfig) => {
  const {
    hoverKeys,
    isScrolling,
    isIdle,
    set,
  } = useTrillPicsStore(
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
  // const { move } = usePicCell(
  //   main,
  //   scrollY
  // );
  // const handler = useCursorOffset(main);

  const handleMove = (
    event: PointerEvent
  ) => {
    endTimeout();
    if (
      isIdle &&
      !hoverKeys.includes(
        TITLE_HOVER_KEY
      )
    ) {
      set({ isIdle: false });
    }
    timeoutRef.current = setTimeout(
      () => {
        set({
          isIdle: true,
          hoverKeys: [],
          isScrolling: false,
        });
        // main.cursor.isOnGrid = false;
      },
      60000
    );
    const mx = event.pageX;
    const my = event.pageY;

    // handler({ nextX: mx, nextY: my });

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
    if (
      main.cursor.isDragging ||
      !main.cursor.isOnGrid ||
      hoverKeys.length > 0
    )
      return;

    if (isOnscreen && !isScrolling) {
      move(mx, my);
      if (!isCursorMove) {
        setCursorMove(true);
      }
    }
    if (isScrolling) {
      scrollTimeoutRef.endTimeout();
      scrollTimeoutRef.timeoutRef.current =
        setTimeout(() => {
          set({
            isScrolling: false,
            scrollDirection: null,
            scrollDelta: 0,
          });
        }, 0);
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

  const handleUp = () => {
    // if (main.cursor.isOnGrid) {
    //   main.cursor.isDragging = false;
    // }
  }

  useEventListener<"pointerup">(
    "pointerup",
    handleUp
  );

  return isIdle;
};
export type TUseMoveResult = ReturnType<
  typeof useMove
>;
