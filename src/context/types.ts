import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
} from "react";
import { MotionValue } from "framer-motion";
import {
  FixedSizeList,
  ListOnScrollProps,
} from "react-window";
import { TRefMutable } from "~/hoc/ref/mutable";
import { TBlur } from "~/context/blur";
import { TCursor } from "~/context/cursor";
import { TPicsRows } from "~/store/state/table/types";
import { TFontsResult } from "~/context/fonts";
import { TCell } from "~/pics/grid/pic";
import { TDraggerMotion } from "~/context/dragger";
import { TReadyScreen } from "~/shell/init/measure";

export type TScreenReadyProps = {
  screen: TReadyScreen;
};
export type TVirtualizeContextProviderProps =
  PropsWithChildren<TScreenReadyProps>;

export type TVirtualizeListProps =
  TPicsRows;
export type TGrid = any &
  FixedSizeList<TVirtualizeListProps> & {
    state: {
      isScrolling: boolean;
      scrollDirection:
        | "forward"
        | "backward";
    };
  };

export type TGridHandle = {
  enableScroll: () => void;
  disableScroll: () => void;
  scrollTop: () => void;
  scrollToRandom: () => TCell | void;
  isScrolling: () => boolean;
  isHovering: () => boolean;
};
export type TFoundationValue =
  DOMRect | null;

export type TElementValue =
  HTMLElement | null;

export type TMain = {
  blur: TBlur;
  cursor: TCursor;
  dragger: TDraggerMotion
};
export type TVirtualizeContext =
  TScreenReadyProps & {
    isIdle: boolean;
    foundationValue: TFoundationValue;
    updateFoundation: Dispatch<
      SetStateAction<TFoundationValue>
    >;
    isOnscreen: boolean;
    ref: TRefMutable<TGridHandle>;
    main: TMain;
    fonts: TFontsResult;
    scrollY: MotionValue<number>;
    onScroll(
      props: ListOnScrollProps
    ): void;
    resetLayout(): void;
    dragger: TDraggerMotion;
  };
