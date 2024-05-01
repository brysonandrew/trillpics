import {
  PropsWithChildren,
  useRef,
  MutableRefObject,
  createContext,
  useContext,
  ForwardedRef,
  FC,
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
import { useScrollUpdateHandler } from "~/shell/pics/virtualize/scroll/update";
import { TRefMutable } from "~/hoc/ref/mutable";

export type TVirtualizeListProps =
  TPicsRows;
export type TVirtualizeList =
  FixedSizeList<TVirtualizeListProps>;

export type TVirtualizeContextHandle = {
  scrollTop: () => void;
};

// export type TRefForwarded =
//   ForwardedRef<TVirtualizeContextHandle>;

export type TVirtualizeContext = {
  // virtualizeList: TVirtualizeList | null;
  // setVirtualizeList: (
  //   instance: TVirtualizeList | null
  // ) => void;
  ref: TRefMutable<TVirtualizeContextHandle>;
  blurXRef: MutableRefObject<AnimationPlaybackControls | null>;
  blurYRef: MutableRefObject<AnimationPlaybackControls | null>;
  blurX: MotionValue<number>;
  blurY: MotionValue<number>;
  scroll: {
    y: MotionValue<number>;
  };
  cursor: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
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
  const blurXRef =
    useRef<AnimationPlaybackControls | null>(
      null
    );
  const blurYRef =
    useRef<AnimationPlaybackControls | null>(
      null
    );
  const ref: TRefMutable<TVirtualizeContextHandle> =
    useRef<TVirtualizeContextHandle | null>(
      null
    );
  const blurX = useMotionValue(0);
  const blurY = useMotionValue(0);
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const sy = useMotionValue(0);

  const handleScroll =
    useScrollUpdateHandler({
      scroll: { y: sy },
    });

  return (
    <VirtualizeContext.Provider
      value={{
        scroll: {
          y: sy,
        },
        ref,
        blurXRef,
        blurYRef,
        blurX,
        blurY,
        cursor: { x: cx, y: cy },
        onScroll: handleScroll,
      }}
    >
      {children}
    </VirtualizeContext.Provider>
  );
};
