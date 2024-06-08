import { useState } from "react";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useTrillPicsStore } from "~/store/middleware";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { TReadyContext } from "~/shell/ready/context/types";
import { TITLE_HOVER_KEY } from "~/pics/header/left";

type TConfig = Pick<
  TReadyContext,
  "move" | "main" | "scrollTimeoutRef"
> & { isOnscreen: boolean };
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
      },
      60000
    );
    const mx = event.pageX;
    const my = event.pageY;

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

  // useEventListener<"pointerenter">(
  //   "pointerenter",
  //   handleMove
  // );

  // useEventListener<"pointerover">(
  //   "pointerover",
  //   handleMove
  // );

  // useEventListener<"pointerup">(
  //   "pointerup",
  //   handleUp
  // );

  useEventListener<"pointermove">(
    "pointermove",
    handleMove
  );

  const handleTouchMove = (
    event: TouchEvent
  ) => {
    if (event.touches.length === 0)
      return;
    const mx = event.touches[0].pageX;
    const my = event.touches[0].pageY;

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
    if (!isScrolling) {
      move(mx, my);
    }
  };

  useEventListener<"touchmove">(
    "touchmove",
    handleTouchMove
  );
};
