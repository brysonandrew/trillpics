import {
  PropsWithChildren,
  useRef,
  createContext,
  useContext,
  FC,
  useState,
  useMemo,
} from "react";
import {
  useMotionValue,
  MotionValue,
} from "framer-motion";
import type {
  FixedSizeList,
  ListOnScrollProps,
} from "react-window";
import { TPicsRows } from "~/store/state/table/types";
import { useScrollUpdateHandler } from "~/pics/virtualize/scroll/handlers/update";
import { TRefMutable } from "~/hoc/ref/mutable";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useOnscreen } from "~/pics/virtualize/use-onscreen";
import { useTrillPicsStore } from "~/store";
import { useClickHandler } from "~/pics/virtualize/use-click-handler";
import {
  TBlur,
  useBlur,
} from "~/pics/virtualize/blur";
import {
  TCursor,
  useCursor,
} from "~/pics/virtualize/cursor";

export type TVirtualizeListProps =
  TPicsRows;
export type TVirtualizeList =
  FixedSizeList<TVirtualizeListProps>;

export type TVirtualizeContextHandle = {
  scrollTop: () => void;
  checkScrolling: () => boolean;
  readInstance: () => void;
  isHovering: () => boolean;
};
type TMain = {
  blur: TBlur;
  cursor: TCursor;
};
export type TVirtualizeContext = {
  isOnscreen: boolean;
  ref: TRefMutable<TVirtualizeContextHandle>;
  main: TMain;
  scrollY: MotionValue<number>;
  onScroll(
    props: ListOnScrollProps
  ): void;
};

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
  const ref: TRefMutable<TVirtualizeContextHandle> =
    useRef<TVirtualizeContextHandle | null>(
      null
    );
  const blur = useBlur();
  const cursor = useCursor();
  const main = useMemo<TMain>(() => {
    return {
      cursor,
      blur,
    };
  }, []);

  const scrollY = useMotionValue(0);
  const handleClick = useClickHandler();
  const handlePointerDown = (
    event: PointerEvent
  ) => {
    const isHovering =
      ref.current?.isHovering();

    if (isHovering) {
      handleClick(
        main.cursor
      );
    }
  };
  const [isCursorMove, setCursorMove] =
    useState(false);

  const handleMove = (
    event: PointerEvent
  ) => {
    const size = table.size;
    const nextX = event.pageX;
    const nextY =
      event.pageY - scrollY.get();

    main.cursor.x.set(
      nextX
    );
    main.cursor.x.set(
      nextY
    );

    main.cursor.column =
      ~~(nextX / size);
    main.cursor.row =
      ~~(nextY / size);

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
