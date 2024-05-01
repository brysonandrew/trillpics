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
  virtualizeHandle: TVirtualizeContextHandle;
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
  onUpdate(
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
  const virtualizeHandle: TVirtualizeContextHandle =
    { scrollTop: console.log };
  // useRef<TVirtualizeContextHandle | null>(
  //   null
  // );
  console.log(virtualizeHandle);
  const blurX = useMotionValue(0);
  const blurY = useMotionValue(0);
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const sy = useMotionValue(0);

  const handleUpdate =
    useScrollUpdateHandler({
      scroll: { y: sy },
    });

  return (
    <VirtualizeContext.Provider
      value={{
        scroll: {
          y: sy,
        },
        virtualizeHandle,
        blurXRef,
        blurYRef,
        blurX,
        blurY,
        cursor: { x: cx, y: cy },
        onUpdate: handleUpdate,
      }}
    >
      {children}
    </VirtualizeContext.Provider>
  );
};
