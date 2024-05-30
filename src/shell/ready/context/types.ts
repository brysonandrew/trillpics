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
import { TPicsRows } from "~/store/state/table/types";
import { TCell } from "~/pics/grid/pic";
import { TScreenReady } from "~/shell/init/hooks/measure/measure";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { TUsePicCell } from "~/hooks/pic/cell";
import { TFontsResult } from "~/shell/ready/context/fonts";
import { TInitContext } from "~/shell/init/context/types";

export type TScreenReadyProps = {
  screen: TScreenReady;
};
export type TReadyContextProviderProps =
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

export type TReadyContext =
  TInitContext &
    TUsePicCell &
    TScreenReadyProps & {
      isIdle: boolean;
      foundationValue: TFoundationValue;
      updateFoundation: Dispatch<
        SetStateAction<TFoundationValue>
      >;
      isOnscreen: boolean;
      ref: TRefMutable<TGridHandle>;
      fonts: TFontsResult;
      scrollTimeoutRef: ReturnType<
        typeof useTimeoutRef
      >;
      onScroll(
        props: ListOnScrollProps
      ): void;
      resetLayout(): void;
    };
