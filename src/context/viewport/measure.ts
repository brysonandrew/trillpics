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
} from "@brysonandrew/measure";
import { measureContainer } from "@brysonandrew/viewport";
import { useScroll } from "~/context/scroll";
import { isValue } from "~/utils/validation/is/value";

const RESIZE_COOLDOWN = 400;

export type TContainerState = {
  container?:
    | TDimensionsInit
    | TDimensionsReady;
};

type TInit = TDimensionsInit & {
  isResizing: boolean;
};

export const INIT_VIEWPORT: TInit = {
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
export type TViewport =
  | TInit
  | (TReady & TContainerState);
type TConfig = {
  isContainer?: boolean;
};
export const useViewportMeasure = (
  config: TConfig = {}
): TViewport => {
  const { blurX, blurXRef } =
    useScroll();
  const [viewport, setViewport] =
    useState<TViewport>(INIT_VIEWPORT);
  const { timeoutRef, endTimeout } =
    useTimeoutRef();

  const handleSize = (
    next?: TViewport
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
        ...(next = INIT_VIEWPORT),
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
      setViewport(ready);
      return;
    }

    setViewport(next ?? INIT_VIEWPORT);
  };

  const handleResize = () => {
    handleSize({
      ...INIT_VIEWPORT,
      isResizing: true,
    });
    if (isValue(blurXRef.current)) {
      blurXRef.current.cancel();
    }
    blurXRef.current = animate(
      blurX,
      100,
      {
        duration:
          (RESIZE_COOLDOWN / 1000) * 2,
        type: "tween",
        onComplete: () => blurX.set(0),
      }
    );
    endTimeout();
    timeoutRef.current = setTimeout(
      () => {
        handleSize(INIT_VIEWPORT);
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

  return viewport;
};
