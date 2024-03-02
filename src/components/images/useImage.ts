import { useViewport } from '@shell/providers/context/viewport';
import {
  useHoverKey,
  NONE_CURSOR_KEY,
} from '@brysonandrew/cursor';
import {
  TImageDimensionsConfig,
  useImageDimensions,
} from '@hooks/image/useImageDimensions';
import { TDimensions } from '@t/measure';
import { useState } from 'react';
import { resolveViewportSelfCenter } from './image/resolveViewportSelfCenter';
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { FULLSCREEN_Z } from '@constants/dom';
import { resolveCompositeKey } from '@brysonandrew/utils-key';
export const SEARCH_PARAM_ID = 'open';

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
  const [isFront, setFront] =
    useState<boolean>(false);
  const { pathname } = useLocation();
  const [searchParams] =
    useSearchParams();
  const navigate = useNavigate();
  const idParam = searchParams.get(
    SEARCH_PARAM_ID,
  );
  const isOpen = idParam === id;
  const { isHover, handlers } =
    useHoverKey(NONE_CURSOR_KEY, id);
  const handleToggle = () => {
    if (isOpen) {
      searchParams.delete(
        SEARCH_PARAM_ID,
      );
      handlers.onPointerLeave();
    } else {
      setFront(true);
      searchParams.set(
        SEARCH_PARAM_ID,
        id,
      );
    }
    navigate(
      `${pathname}?${searchParams}`,
    );
  };
  const viewport = useViewport();
  const imageDimensions = {
    width,
    height,
  };
  const boxDimensions: TImageDimensionsConfig['box'] =
    isOpen && viewport.isDimensions
      ? ({
          width: viewport.width,
          height: viewport.height,
        } as const)
      : config;

  const dimensions = useImageDimensions(
    {
      box: boxDimensions,
      image: imageDimensions,
    },
  );

  const handleLayoutAnimationComplete =
    () => {
      if (!isOpen) {
        setFront(false);
      }
    };

  const isDimensions =
    dimensions.isDimensions &&
    viewport.isDimensions;

  const zIndex = isFront
    ? FULLSCREEN_Z
    : 0;

  return {
    id,
    isHover,
    isOpen,
    boxProps: {
      className: 'relative',
      style: {
        ...imageDimensions,
        cursor: 'zoom-in',
      },
      onClick: handleToggle,
    },
    designProps: {
      initial: false,
      layout: true,
      style: {
        zIndex,
        ...(isOpen && isDimensions
          ? ({
              position: 'fixed',
              ...resolveViewportSelfCenter(
                viewport,
                dimensions,
              ),
            } as const)
          : ({
              position: 'absolute',
              left: offsetX,
              top: 0,
              ...imageDimensions,
            } as const)),
      } as const,
      animate: {
        opacity: isDimensions ? 1 : 0,
      },
      onLayoutAnimationComplete:
        handleLayoutAnimationComplete,
      ...handlers,
    },
    backdropProps: {
      className:
        'bg-black-02 inset-0 z-60 fade-in-animation zoom-out',
      style: {
        zIndex: FULLSCREEN_Z-1,
        ...(viewport.isDimensions
          ? ({

              position: 'fixed',
              width: viewport.width,
              height: viewport.height,
            } as const)
          : ({} as const)),
        backdropFilter:
          'blur(40px) grayscale(100%) brightness(50%)',
        cursor: 'zoom-out',
      },
      onClick: handleToggle,
    },
    onToggle: handleToggle,
  };
};

export type TUseImageReturn =
  ReturnType<typeof useImage>;
