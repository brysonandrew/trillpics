import {
  PropsWithChildren,
  useRef,
  createContext,
  useContext,
  FC,
  useState,
  useMemo,
} from "react";
import { useMotionValue } from "framer-motion";
import { useScrollUpdateHandler } from "~/context/scroll/update";
import { TRefMutable } from "~/hoc/ref/mutable";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useOnscreen } from "~/context/hooks/onscreen";
import { useTrillPicsStore } from "~/store";
import { useClickHandler } from "~/context/hooks/click";
import { useBlur } from "~/context/blur";
import { useCursor } from "~/context/cursor";
import { usePicCell } from "~/pics/grid/pic/hooks/cell";
import {
  TVirtualizeContext,
  TGridHandle,
} from "~/context/types";

const VirtualizeContext = createContext(
  {} as TVirtualizeContext
);

export const useVirtualizeContext =
  () => useContext(VirtualizeContext);

export type TVirtualizeContextProviderProps =
  PropsWithChildren;
export const VirtualizeContextProvider: FC<
  TVirtualizeContextProviderProps
> = ({ children }) => {
  const { table } = useTrillPicsStore(
    ({ table }) => ({ table })
  );
  const isOnscreen = useOnscreen();
  const ref: TRefMutable<TGridHandle> =
    useRef<TGridHandle | null>(
      null
    );
  const blur = useBlur();
  const cursor = useCursor();
  const main = useMemo(() => {
    return {
      cursor,
      blur,
    };
  }, []);

  const scrollY = useMotionValue(0);
  const handleClick = useClickHandler(
    main.cursor
  );
  const handlePointerDown = () => {
    const isHovering =
      ref.current?.isHovering();
    if (isHovering) {
      handleClick();
    }
  };
  const [isCursorMove, setCursorMove] =
    useState(false);

  const { move } = usePicCell();
  const handleMove = (
    event: PointerEvent
  ) => {
    const size = table.size;
    const nextX = event.pageX;
    const nextY =
      event.pageY - scrollY.get();

    main.cursor.x.set(nextX);
    main.cursor.x.set(nextY);

    main.cursor.column = ~~(
      nextX / size
    );
    main.cursor.row = ~~(nextY / size);

    move(main.cursor);

    if (isOnscreen && !isCursorMove) {
      setCursorMove(true);
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

  useEventListener(
    "pointerdown",
    handlePointerDown
  );

  const handleScroll =
    useScrollUpdateHandler({
      scrollY,
      ref,
    });

  return (
    <VirtualizeContext.Provider
      value={{
        scrollY,
        isOnscreen,
        ref,
        main,
        onScroll: handleScroll,
      }}
    >
      {children}
    </VirtualizeContext.Provider>
  );
};
