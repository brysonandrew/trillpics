import { PropsWithChildren } from "react";
import { MotionValue } from "framer-motion";
import { TBlur } from "~/shell/init/context/blur";
import { TCursor } from "~/shell/init/context/cursor";
import { TCell } from "~/pics/grid/pic";
import { TDraggerMotion } from "~/shell/init/context/dragger";
import { TScreen } from "~/shell/init/hooks/measure/measure";

export type TScreenInitProps = {
  screen: TScreen;
};
export type TInitContextProviderProps =
  PropsWithChildren<TScreenInitProps>;

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
  dragger: TDraggerMotion;
};
export type TInitContext = {
  main: TMain;
  scrollY: MotionValue<number>;
};
