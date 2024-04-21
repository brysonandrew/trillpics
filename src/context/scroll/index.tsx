import {
  useState,
  useContext as useReactContext,
  createContext,
  PropsWithChildren,
  useRef,
  MutableRefObject,
} from "react";
import type { FC } from "react";
import {
  useMotionValue,
  MotionValue,
  animate,
  AnimationPlaybackControls,
} from "framer-motion";
import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAM_ID } from "~/pages/home/pics/pic/use-pic";
import { TMotionPoint } from "~/types/animation";
import type {
  ListOnScrollProps,
  FixedSizeList,
} from "react-window";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
export type TState = {
  isScrolling: boolean;
  isScroll: boolean;
  isTransitioningGallery: boolean;
};
export const STATE = {
  isScrolling: false,
  isScroll: false,
  isTransitioningGallery: false,
} as TState;

export const CONTEXT: TContext = {
  // ...STATE,
  // listRef: { current: null },
  // onUpdate: NOOP,
  // scroll: {
  //   x: motionValue(0),
  //   y: motionValue(0),
  // },
  // onMotionBlurStart:(): void;
  // onMotionBlurEnd:(): void;
} as TContext;

export type TContext = TState & {
  listRef: MutableRefObject<any>;
  blurXRef: MutableRefObject<any>;
  blurYRef: MutableRefObject<any>;
  blurX: MotionValue<number>;
  blurY: MotionValue<number>;

  onUpdate(
    props: ListOnScrollProps
  ): void;
  onMotionBlurStart(): void;
  onMotionBlurEnd(): void;
};

export const SCROLL = 120;
export const SCROLL_COOLDOWN = 80;

export const Scroll =
  createContext<TContext>(CONTEXT);

export const useScroll = (): TContext =>
  useReactContext<TContext>(Scroll);

type TProviderProps = PropsWithChildren;
export const ScrollProvider: FC<
  TProviderProps
> = ({ children }) => {
  const blurXRef =
    useRef<AnimationPlaybackControls | null>(
      null
    );
  const blurYRef =
    useRef<AnimationPlaybackControls | null>(
      null
    );
  const blurX = useMotionValue(0);
  const blurY = useMotionValue(0);

  const [
    isTransitioningGallery,
    setTransitioningGallery,
  ] = useState(false);
  //const onDrag = setTransitioningGallery;
  const onMotionBlurStart = () =>
    setTransitioningGallery(true);
  const onMotionBlurEnd = () =>
    setTransitioningGallery(false);
  const listRef = useRef<
    typeof FixedSizeList | null
  >(null);

  const [isScroll, setScroll] =
    useState(false);
  const [isScrolling, setScrolling] =
    useState(false);
  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleUpdate = (
    props: ListOnScrollProps
  ) => {
    // animate(
    //   scrollY,
    //   props.scrollOffset * 0.001,
    //   {
    //     // type: "spring",
    //     // duration: 1,
    //     type: "tween",
    //   }
    // );

    const { scrollOffset } = props;
    if (!isScrolling) {
      searchParams.delete(
        SEARCH_PARAM_ID
      );
      navigate(
        `${pathname}?${searchParams}`
      );
      setScrolling(true);
    }
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        setScrolling(false);
      },
      SCROLL_COOLDOWN
    );

    if (
      !isScroll &&
      scrollOffset > SCROLL
    ) {
      setScroll(true);
    }
    if (
      isScroll &&
      scrollOffset < SCROLL
    ) {
      setScroll(false);
    }
  };

  return (
    <Scroll.Provider
      value={{
        listRef,
        blurXRef,
        blurYRef,
        blurX,
        blurY,
        isScroll,
        isScrolling,
        onUpdate: handleUpdate,
        onMotionBlurStart,
        onMotionBlurEnd,
        isTransitioningGallery,
      }}
    >
      {children}
    </Scroll.Provider>
  );
};
