import { useState } from "react";
import {
  animate,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import {
  TDimensionsInit,
  TDimensionsReady,
} from "@brysonandrew/config-types";
import { useVirtualizeContext } from "~/pics/virtualize/context";
import { isValue } from "~/utils/validation/is/value";
import { measureContainer } from "~/shell/init/container";

export const RESIZE_COOLDOWN = 400;

export type TContainerState = {
  container?:
    | TDimensionsInit
    | TDimensionsReady;
};

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
};
export type TScreen =
  | TInit
  | (TReady & TContainerState);
type TConfig = {
  isContainer?: boolean;
} & {
  onReady?: (state: TReady) => void;
};
export const useScreenMeasure = (
  config: TConfig = {}
) => {
  const { blurRef } =
    useVirtualizeContext();
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
      const ready = {
        ...(next = INIT_SCREEN),
        ...(config.isContainer
          ? {
              container:
                measureContainer(),
            }
          : {}),
        width,
        height,
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

  const handleResize = () => {
    handleSize({
      ...INIT_SCREEN,
      isResizing: true,
    });
    if (
      isValue(blurRef.current.control.x)
    ) {
      blurRef.current.control.x.cancel();
    }
    blurRef.current.control.x = animate(
      blurRef.current.value.x,
      100,
      {
        duration:
          (RESIZE_COOLDOWN / 1000) * 2,
        type: "tween",
        onComplete: () =>
          blurRef.current.value.x.set(
            0
          ),
      }
    );
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
