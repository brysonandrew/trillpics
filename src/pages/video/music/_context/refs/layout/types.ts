import { MotionValue } from "framer-motion";
import { MutableRefObject } from "react";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/refs/layout/constants";

type TPageMode =
  (typeof PAGE_SCROLL_MODES)[number];
export type TScroll =
  MutableRefObject<HTMLDivElement | null> & {
    y: MotionValue<number>;
    modes: readonly TPageMode[];
    modeIndex: number;
  };