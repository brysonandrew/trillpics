import {
  useMemo,
  MutableRefObject,
} from "react";
import { useMotionValue } from "framer-motion";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/init/constants";
import { TScroll } from "~/pages/video/music/_context/init/types";

type TRefsInputs = {
  slider: MutableRefObject<HTMLInputElement | null>;
  number: MutableRefObject<HTMLInputElement | null>;
  scroll: TScroll;
};
export const useRefsLayout = () => {
  const scrollY = useMotionValue(0);

  const layout =
    useMemo<TRefsInputs>(() => {
      const scroll = {
        current: null,
        y: scrollY,
        modes: PAGE_SCROLL_MODES,
        modeIndex: 0,
      };
      return {
        scroll,
        slider: { current: null },
        number: { current: null },
      } as const;
    }, []);
  return layout;
};
