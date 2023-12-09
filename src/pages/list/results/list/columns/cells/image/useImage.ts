import { FADE_PRESENCE } from '@constants/animation';
import { useViewport } from '@context/viewport';
import { useHover } from '@hooks/dom/useHover';
import {
  TImageDimensionsConfig,
  useImageDimensions,
} from '@hooks/image/useImageDimensions';
import { TDimensions } from '@t/measure';
import clsx from 'clsx';
import {
  MotionStyle,
  useCycle,
  useScroll,
} from 'framer-motion';
import { useState } from 'react';
import {
  TZIndexKey,
  Z_INDICIES,
  TPositionKey,
  POSITIONS,
} from './config';
import { resolveViewportSelfCenter } from './resolveViewportSelfCenter';

type TConfig = TDimensions & {
  offsetY: number;
};
export const useImage = ({
  offsetY,
  ...config
}: TConfig) => {
  const { width, height } = config;
  const [zIndex, setZ] =
    useState<TZIndexKey>(Z_INDICIES[0]);
  const [position, cyclePosition] =
    useCycle<TPositionKey>(
      ...POSITIONS,
    );
  const { isHover, ...handlers } =
    useHover();
  const isLayout = Boolean(isHover);
  const isFirstPosition =
    position === POSITIONS[0];
  const handleClick = () => {
    if (isFirstPosition) {
      setZ(Z_INDICIES[1]);
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
      ? {
          position: 'absolute',
          ...config,
        }
      : {
          position: 'fixed',
          ...resolveViewportSelfCenter(
            viewport,
            dimensions,
            offsetY,
          ),
          ...dimensions,
        }),
  } as any;
  return {
    isFirstPosition,
    boxProps: {
      style: {
        ...config,
      },
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
      onClick: handleClick,
      ...handlers,
    },
    backdropProps: {
      ...FADE_PRESENCE,
      className: clsx(
        'fixed backdrop-blur-lg bg-black-05 inset-0 z-50',
      ),
      style: viewport.isDimensions
        ? {
            width: viewport.width,
            height: viewport.height,
          }
        : {},
      onClick: handleClick,
    },
  };
};
