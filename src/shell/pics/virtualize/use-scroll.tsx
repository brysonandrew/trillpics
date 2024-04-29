import {
  PropsWithChildren,
  useRef,
  MutableRefObject,
  createContext,
  useState,
  useContext,
} from "react";
import type { FC } from "react";
import {
  useMotionValue,
  MotionValue,
  AnimationPlaybackControls,
} from "framer-motion";
import {
  useLocation,
  useNavigate,
} from "react-router";
import { useSearchParams } from "react-router-dom";
import type { ListOnScrollProps } from "react-window";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useTrillPicsStore } from "~/store";
import {
  SCROLL_COOLDOWN,
  SCROLL,
} from "~/store/slices/scroll";
import { TScrollState } from "~/store/slices/scroll/types";
import { SEARCH_PARAM_ID } from "~/shell/pics/pic/display";

export type TVirtualizeList = any;
// FixedSizeList<
//   FixedSizeListProps<TPicsRow>
// >;
export type TContext = TScrollState & {
  virtualizeList: TVirtualizeList | null;
  setVirtualizeList: (
    instance: TVirtualizeList | null
  ) => void;
  blurXRef: MutableRefObject<AnimationPlaybackControls | null>;
  blurYRef: MutableRefObject<AnimationPlaybackControls | null>;
  blurX: MotionValue<number>;
  blurY: MotionValue<number>;
  scroll: {
    y: MotionValue<number>;
    yOffset: MotionValue<number>;
  };
  onUpdate(
    props: ListOnScrollProps
  ): void;
};

const VirtualizeScrollContext =
  createContext({} as TContext);

export const useVirtualizeScroll = () =>
  useContext(VirtualizeScrollContext);

type TProviderProps = PropsWithChildren;
export const VirtualizeScrollProvider: FC<
  TProviderProps
> = ({ children }) => {
  const [
    virtualizeList,
    setVirtualizeList,
  ] = useState<TVirtualizeList | null>(
    null
  );
  const {
    isScroll,
    isScrolling,
    updateState,
  } = useTrillPicsStore(
    ({
      isScroll,
      isScrolling,
      updateState,
    }) => ({
      isScroll,
      isScrolling,
      updateState,
    })
  );
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
  const scrollYOffset =
    useMotionValue(0);
  const scrollY = useMotionValue(0);

  const { timeoutRef, endTimeout } =
    useTimeoutRef();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleUpdate = (
    props: ListOnScrollProps
  ) => {
    const { scrollOffset } = props;
    if (!isScroll) {
      const nextScrollY =
        1 - scrollOffset * 0.0006;
      scrollY.set(nextScrollY);
    }
    console.log(scrollOffset);
    scrollYOffset.set(-scrollOffset);

    if (!isScrolling) {
      searchParams.delete(
        SEARCH_PARAM_ID
      );
      navigate(
        `${pathname}?${searchParams}`
      );
      updateState({
        isScrolling: true,
      });
    }
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        updateState({
          isScrolling: false,
        });
      },
      SCROLL_COOLDOWN
    );

    if (
      !isScroll &&
      scrollOffset > SCROLL
    ) {
      updateState({ isScroll: true });
    }
    if (
      isScroll &&
      scrollOffset < SCROLL
    ) {
      updateState({ isScroll: false });
    }
  };

  return (
    <VirtualizeScrollContext.Provider
      value={{
        scroll: {
          y: scrollY,
          yOffset: scrollYOffset,
        },
        virtualizeList,
        setVirtualizeList,
        blurXRef,
        blurYRef,
        blurX,
        blurY,
        isScroll,
        isScrolling,
        onUpdate: handleUpdate,
      }}
    >
      {children}
    </VirtualizeScrollContext.Provider>
  );
};
