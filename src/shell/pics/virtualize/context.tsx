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
  motionValue,
  animationControls,
} from "framer-motion";
import type {
  FixedSizeList,
  ListOnScrollProps,
} from "react-window";
import { TPicsRows } from "~/store/state/table/types";
import { useScrollUpdateHandler } from "~/shell/pics/virtualize/scroll/handlers/update";
import { TRefMutable } from "~/hoc/ref/mutable";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useOnscreen } from "~/shell/pics/virtualize/use-onscreen";

export type TVirtualizeListProps =
  TPicsRows;
export type TVirtualizeList =
  FixedSizeList<TVirtualizeListProps>;

export type TVirtualizeContextHandle = {
  scrollTop: () => void;
};

type TBlurAnimation = {
  control: {
    x: AnimationPlaybackControls | null;
    y: AnimationPlaybackControls | null;
  };
  value: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};
export type TVirtualizeContext = {
  isOnscreen: boolean;
  ref: TRefMutable<TVirtualizeContextHandle>;
  blurRef: MutableRefObject<TBlurAnimation>;
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
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
  const { timeoutRef, endTimeout } =
    useTimeoutRef();

  const isOnscreen = useOnscreen();

  const blurX = useMotionValue(0);
  const blurY = useMotionValue(0);
  const blurRef =
    useRef<TBlurAnimation>({
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

  const [isCursorMove, setCursorMove] =
    useState(false);
  const handleDown = () => {
    console.log("CLICK");
  };
  const handleMove = (
    event: PointerEvent
  ) => {
    const nextX = event.pageX; // - scrollX.get();
    const nextY =
      event.pageY - scrollY.get();
    cursorX.set(nextX);
    cursorY.set(nextY);

    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        cursorX.set(nextX);
        cursorY.set(nextY);
      },
      200
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
    handleDown
  );

  const handleScroll =
    useScrollUpdateHandler({
      scrollY,
    });

    console.log(ref)
  return (
    <VirtualizeContext.Provider
      value={{
        scrollY,
        isOnscreen,
        ref,
        blurRef,
        cursorX,
        cursorY,
        onScroll: handleScroll,
      }}
    >
      {children}
    </VirtualizeContext.Provider>
  );
};
