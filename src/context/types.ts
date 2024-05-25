import {
  Dispatch,
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
import { TUseUiResult } from "~/context/ui";
import { TCell } from "~/pics/grid/pic";
import { TDraggerMotion } from "~/context/dragger";

export type TVirtualizeListProps =
  TPicsRows;
export type TGrid =
  FixedSizeList<TVirtualizeListProps> & {
    state: {
      isScrolling: boolean;
      scrollDirection:
        | "forward"
        | "backward";
    };
  };

export type TGridHandle = {
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
  ui: TUseUiResult;
};
export type TVirtualizeContext = {
  isIdle: boolean;
  foundationValue: TFoundationValue;
  updateFoundation: Dispatch<
    SetStateAction<TFoundationValue>
  >;
  centerValue: TElementValue;
  updateCenter: Dispatch<
    SetStateAction<TElementValue>
  >;
  headerValue: TElementValue;
  updateHeader: Dispatch<
    SetStateAction<TElementValue>
  >;
  footerValue: TElementValue;
  updateFooter: Dispatch<
    SetStateAction<TElementValue>
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
