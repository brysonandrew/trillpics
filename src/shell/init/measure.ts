import { useState } from "react";
import {
  animate,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import {
  TDimensions,
  TDimensionsInit,
  TDimensionsReady,
} from "@brysonandrew/config-types";
import { useContextGrid } from "~/context";
import { isValue } from "~/utils/validation/is/value";
import { measureContainer } from "~/shell/init/container";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";

export const RESIZE_COOLDOWN = 400;

type TInit = TDimensionsInit & {
  isResizing: boolean;
};

export const INIT_SCREEN: TInit = {
  isResizing: false,
  isDimensions: false,
} as const;

type TReady = TDimensionsReady & {
  width: number;
  isResizing: boolean;
  halfWidth: number;
  halfHeight: number;
  isVertical: boolean;
  container: ReturnType<
    typeof measureContainer
  >;
};
export type TScreen = TInit | TReady;
type TConfig = {
  isContainer?: boolean;
} & {
  onReady?: (state: TReady) => void;
};
export const useScreenMeasure = (
  config: TConfig = {}
) => {
  const { main } = useContextGrid();
  const [screen, setScreen] =
    useState<TScreen>(INIT_SCREEN);
  const { timeoutRef, endTimeout } =
    useTimeoutRef();

  const handleSize = (
    next?: TScreen
  ) => {
    let isResizing = false;
    if (typeof next !== "undefined") {
      isResizing = next.isResizing;
    }

    const width =
      document.documentElement
        .clientWidth;
    const height =
      document.documentElement
        .clientHeight;

    const isDimensions =
      typeof width !== "undefined" &&
      typeof height !== "undefined";
    if (isDimensions) {
      const dimensions = {
        width,
        height,
      };
      const ready = {
        ...(next = INIT_SCREEN),
        container: {
          ...measureContainer(
            dimensions
          ),
        },
        ...dimensions,
        halfWidth: width * 0.5,
        halfHeight: height * 0.5,
        isVertical:
          width < height && width < 700,
        isDimensions,
        isResizing,
      } as TReady;
      if (config.onReady) {
        config.onReady(ready);
      }
      setScreen(ready);
      return;
    }

    setScreen(next ?? INIT_SCREEN);
  };
  const handler = useBlurAnimate();

  const handleResize = () => {
    handleSize({
      ...INIT_SCREEN,
      isResizing: true,
    });

    handler();
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        handleSize(INIT_SCREEN);
      },
      RESIZE_COOLDOWN
    );
  };

  useEventListener(
    "resize",
    handleResize
  );
  useIsomorphicLayoutEffect(
    handleSize,
    []
  );

  return screen;
};
