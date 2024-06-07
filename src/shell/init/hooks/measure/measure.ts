import { useState } from "react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import {
  TDimensionsInit,
  TDimensionsReady,
} from "@brysonandrew/config-types";
import { measureContainer } from "~/shell/init/hooks/measure/container";

export const RESIZE_COOLDOWN = 400;
export const MIN_DEVICE_WIDTH =600;//250;// 769;

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
  isWideEnough: boolean
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
export type TScreenReady = Extract<
  TScreen,
  { isDimensions: true }
>;
export const useScreenMeasure = (
  config: TConfig = {}
) => {
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
        isWideEnough: width > MIN_DEVICE_WIDTH,
      };
      if (config.onReady) {
        config.onReady(ready);
      }
      setScreen(ready);
      return;
    }

    setScreen(next ?? INIT_SCREEN);
  };

  const handleResize = () => {
    handleSize({
      ...INIT_SCREEN,
      isResizing: true,
    });
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
