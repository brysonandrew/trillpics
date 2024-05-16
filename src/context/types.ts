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
  isScrolling: () => boolean;
  isHovering: () => boolean;
};
export type TOriginValue =
  DOMRect | null;

export type TOrigin = {
  value: TOriginValue;
  update: Dispatch<
    SetStateAction<TOriginValue>
  >;
};

type TMain = {
  blur: TBlur;
  cursor: TCursor;
  ui: TUseUiResult;
  origin: TOrigin;
};
export type TVirtualizeContext = {
  headerValue: HTMLElement|null;
  updateHeader: Dispatch<
    SetStateAction<HTMLElement|null>
  >;
  footerValue: HTMLElement|null;
  updateFooter: Dispatch<
    SetStateAction<HTMLElement|null>
  >;
  isOnscreen: boolean;
  ref: TRefMutable<TGridHandle>;
  main: TMain;
  fonts: TFontsResult;
  scrollY: MotionValue<number>;
  onScroll(
    props: ListOnScrollProps
  ): void;
};
