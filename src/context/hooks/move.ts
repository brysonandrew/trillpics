import { useState } from "react";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useContextGrid } from "~/context";
import { useTrillPicsStore } from "~/store/middleware";
import { usePicCell } from "~/hooks/pic/cell";
import { useBodyStyle } from "~/context/use-body-style";

export const useMove = () => {
  const { main, scrollY, isOnscreen } =
    useContextGrid();
  const { isScrolling } =
    useTrillPicsStore(
      ({ isScrolling }) => ({
        isScrolling,
      })
    );
  const [isCursorMove, setCursorMove] =
    useState(false);
  const { move } = usePicCell(main);
  const handleMove = (
    event: PointerEvent
  ) => {
    const currScrollY = scrollY.get();
    const mx = event.pageX;
    const my =
      event.pageY - currScrollY;

    main.cursor.x.set(mx);
    main.cursor.y.set(my);

    if (isOnscreen && !isScrolling) {
      move();
      if (!isCursorMove) {
        setCursorMove(true);
      }
    }
  };

  useBodyStyle(`overflow: hidden;`);

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
};
export type TUseMoveResult = ReturnType<
  typeof useMove
>;
