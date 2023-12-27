import {
  EXIT_CURSOR_KEY,
  VIEW_CURSOR_KEY,
} from '@components/cursor/switch/config';
import { FADE_PRESENCE } from '@constants/animation';
import { useViewport } from '@context/viewport';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import {
  TImageDimensionsConfig,
  useImageDimensions,
} from '@hooks/image/useImageDimensions';
import { TDimensions } from '@t/measure';
import { useCycle } from 'framer-motion';
import { useState } from 'react';
import {
  TZIndexKey,
  Z_INDICIES,
  TPositionKey,
  POSITIONS,
} from './config';
import { resolveViewportSelfCenter } from './resolveViewportSelfCenter';

export type TUseImageConfig =
  TDimensions & {
    offsetX: number;
    id: string;
  };
export const useImage = ({
  offsetX,
  id,
  ...config
}: TUseImageConfig) => {
  const { width, height } = config;
  const [zIndex, setZ] =
    useState<TZIndexKey>(Z_INDICIES[0]);
  const [position, cyclePosition] =
    useCycle<TPositionKey>(
      ...POSITIONS,
    );
  const isFirstPosition =
    position === POSITIONS[0];
  const { isHover, handlers } =
    useHoverKey(
      isFirstPosition
        ? VIEW_CURSOR_KEY
        : 'none',
      id,
    );
  const isLayout = Boolean(isHover);
  const handleTap = () => {
    if (isFirstPosition) {
      setZ(Z_INDICIES[1]);
      handlers.onHoverEnd();
    }
    cyclePosition();
  };
  const viewport = useViewport();
  const imageDimensions = {
    width,
    height,
  };
  let boxDimensions: TImageDimensionsConfig['box'] =
    config;
  if (
    !isFirstPosition &&
    viewport.isDimensions
  ) {
    boxDimensions = {
      width: viewport.width,
      height: viewport.height,
    };
  }
  const dimensions = useImageDimensions(
    {
      box: boxDimensions,
      image: imageDimensions,
    },
  );

  const handleLayoutAnimationComplete =
    () => {
      if (isFirstPosition) {
        setZ(Z_INDICIES[0]);
      }
    };

  const isDimensions =
    dimensions.isDimensions &&
    viewport.isDimensions;

  const isReady = isDimensions;
  const style = {
    zIndex,
    ...(isFirstPosition || !isReady
      ? ({
          position: 'absolute',
          left: offsetX,
          top: 0,
          ...imageDimensions,
        } as const)
      : ({
          position: 'fixed',
          ...resolveViewportSelfCenter(
            viewport,
            dimensions,
          ),
        } as const)),
  };
  const backdropStyle =
    viewport.isDimensions
      ? ({
          position: 'fixed',
          width: viewport.width,
          height: viewport.height,
        } as const)
      : ({} as const);

  return {
    isHover,
    isFirstPosition,
    boxProps: {
      className: 'relative',
      style: imageDimensions,
    },
    imageProps: {
      key: isLayout.toString(),
      layout: isLayout,
      style,
      animate: {
        opacity: isReady ? 1 : 0,
      },
      onLayoutAnimationComplete:
        handleLayoutAnimationComplete,
      onTap: handleTap,
      ...handlers,
    },
    backdropProps: {
      ...FADE_PRESENCE,
      className:
        'backdrop-blur-lg bg-black-05 inset-0 z-60 zoom-out',
      style: backdropStyle,
      onTap: handleTap,
    },
  };
};

export type TUseImageReturn =
  ReturnType<typeof useImage>;
