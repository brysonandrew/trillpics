import { useState } from 'react';
import { useEventListener } from '../events/useEventListener';
import { useTimeoutRef } from './useTimeoutRef';
import { useIsomorphicLayoutEffect } from '@hooks/life-cycle/useIsomorphicLayoutEffect';
import {
  TDimensionsInit,
  TDimensionsReady,
} from '@t/measure';
import { useDelayCallback } from './useDelayCallback';

const RESIZE_COOLDOWN = 400;

type TInit = TDimensionsInit & {
  isResizing: boolean;
};

export const INIT: TInit = {
  isResizing: false,
  isDimensions: false,
} as const;

type TReady = TDimensionsReady & {
  isResizing: boolean;
};
export type TViewport = TInit | TReady;

export const useViewport =
  (): TViewport => {
    const [viewport, setViewport] =
      useState<TViewport>(INIT);
    const { timeoutRef, endTimeout } =
      useTimeoutRef();

    const handleSize = (
      next?: TInit,
    ) => {
      let isResizing = false;
      if (typeof next !== 'undefined') {
        isResizing = next.isResizing;
      }
      const width =
        document.documentElement
          .clientWidth;
      const height =
        document.documentElement
          .clientHeight;

      const isDimensions =
        typeof width !== 'undefined' &&
        typeof height !== 'undefined';

      if (isDimensions) {
        const ready = {
          ...(next = INIT),
          width,
          height,
          isDimensions,
          isResizing,
        } as TReady;
        setViewport(ready);
        return;
      }

      setViewport(next ?? INIT);
    };

    const handleResize = () => {
      handleSize({
        ...INIT,
        isResizing: true,
      });
      endTimeout();
      timeoutRef.current = setTimeout(
        () => {
          handleSize(INIT);
        },
        RESIZE_COOLDOWN,
      );
    };

    useDelayCallback(
      handleResize,
      1000,
    );

    useEventListener(
      'resize',
      handleResize,
    );
    useIsomorphicLayoutEffect(
      handleSize,
      [],
    );

    return viewport;
  };
