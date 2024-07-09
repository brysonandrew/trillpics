import { useMemo } from "react";
import { useMotionValue } from "framer-motion";
import { PAGE_SCROLL_MODES } from "~/pages/video/music/_context/refs/layout/constants";
import {
  TInputRefs,
  TInputRefsGraph,
  TRefsInputs,
  TScroll,
} from "~/pages/video/music/_context/refs/layout/types";

export const useRefsLayout = () => {
  const scrollY = useMotionValue(0);

  const layout =
    useMemo<TRefsInputs>(() => {
      const graph: TInputRefsGraph = {};
      const scroll: TScroll = {
        current: null,
        y: scrollY,
        modes: PAGE_SCROLL_MODES,
        modeIndex: 0,
      };
      const inputRefsCreator = {
        button: {},
        number: {},
        slider: {},
        inputs: {},
        graph,
        update: function <
          T extends HTMLElement
        >(
          key: keyof TInputRefs,
          name: string,
          instance: T | null
        ) {
          if (!this[key][name]) {
            this[key][name] = {
              current: instance,
            };
          } else {
            this[key][name].current =
              instance;
          }

          return this;
        },
      } as const;

      return {
        scroll,
        ...inputRefsCreator,
      } as const;
    }, []);

  return layout;
};
