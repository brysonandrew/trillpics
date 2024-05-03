import {
  PropsWithChildren,
  useRef,
  MutableRefObject,
  createContext,
  useContext,
  FC,
  useState,
} from "react";
import {
  useMotionValue,
  MotionValue,
  AnimationPlaybackControls,
} from "framer-motion";
import type {
  FixedSizeList,
  ListOnScrollProps,
} from "react-window";
import { TPicsRows } from "~/store/state/table/types";
import { useScrollUpdateHandler } from "~/shell/pics/virtualize/scroll/handlers/update";
import { TRefMutable } from "~/hoc/ref/mutable";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useOnscreen } from "~/shell/pics/virtualize/use-onscreen";
import { useTrillPicsStore } from "~/store";
import { useClickHandler } from "~/shell/pics/virtualize/use-click-handler";

type TCursorPosition = {
  x: MotionValue<number>;
  y: MotionValue<number>;
};
const CURSOR_INIT = {
  cell: {
    row: 0,
    column: 0,
  },
};
export type TCursorCell =
  typeof CURSOR_INIT;
export type TCursor = TCursorCell &
  TCursorPosition;
export type TVirtualizeListProps =
  TPicsRows;
export type TVirtualizeList =
  FixedSizeList<TVirtualizeListProps>;

export type TVirtualizeContextHandle = {
  scrollTop: () => void;
  checkScrolling: () => boolean;
  scrollTrue: () => void;
  isHovering: () => boolean;
};

type TBlur = {
  control: {
    x: AnimationPlaybackControls | null;
    y: AnimationPlaybackControls | null;
  };
  value: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};
type TMain = {
  blur: TBlur;
  cursor: TCursor;
};
export type TVirtualizeContext = {
  isOnscreen: boolean;
  ref: TRefMutable<TVirtualizeContextHandle>;
  blurRef: MutableRefObject<TBlur>;
  cursorRef: MutableRefObject<TCursor>;
  mainRef: MutableRefObject<TMain>;
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

  const blurX = useMotionValue(0);
  const blurY = useMotionValue(0);
  const blurRef = useRef<TBlur>({
    control: {
      x: null,
      y: null,
    },
    value: {
      x: blurX,
      y: blurY,
    },
  });
  const ref: TRefMutable<TVirtualizeContextHandle> =
    useRef<TVirtualizeContextHandle | null>(
      null
    );

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const scrollY = useMotionValue(0);
  const cursorRef = useRef<TCursor>({
    cell: { column: 0, row: 0 },
    x: cursorX,
    y: cursorY,
  });

  const mainRef = useRef<TMain>({
    cursor: cursorRef.current,
    blur: blurRef.current,
  });

  const handleClick = useClickHandler();

  const handlePointerDown = (
    event: PointerEvent
  ) => {
    const isHovering =
      ref.current?.isHovering();
    if (isHovering) {
      handleClick(cursorRef.current);
    }
    ref.current?.scrollTrue();
    const isScrolling =
      ref.current?.checkScrolling();
      console.log(isScrolling)
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

    cursorX.set(nextX);
    cursorY.set(nextY);

    cursorRef.current.cell.column = ~~(
      nextX / size
    );
    cursorRef.current.cell.row = ~~(
      nextY / size
    );

    if (isOnscreen && !isCursorMove) {
      setCursorMove(true);
    }
  };

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
        blurRef,
        cursorRef,
        mainRef,
        onScroll: handleScroll,
      }}
    >
      {children}
    </VirtualizeContext.Provider>
  );
};
