import { MotionValue } from "framer-motion";
import {
  FixedSizeList,
  ListOnScrollProps,
} from "react-window";
import { TRefMutable } from "~/hoc/ref/mutable";
import { TBlur } from "~/context/blur";
import { TCursor } from "~/context/cursor";
import { TPicsRows } from "~/store/state/table/types";
import { TCell } from "~/pics/grid/pic";
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
type TMain = {
  blur: TBlur;
  cursor: TCursor;
  ui: TUseUiResult;
};
export type TVirtualizeContext = {
  isOnscreen: boolean;
  ref: TRefMutable<TGridHandle>;
  main: TMain;
  fonts: TFontsResult;
  scrollY: MotionValue<number>;
  onScroll(
    props: ListOnScrollProps
  ): void;
};
