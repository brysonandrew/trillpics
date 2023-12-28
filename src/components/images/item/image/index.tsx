import { TUseImageReturn } from '@components/images/useImage';
import { Backdrop } from './Backdrop';
import { FC, Fragment } from 'react';
import { Portal } from '@components/images/Portal';
import { Container } from './container';
import { Design } from './Design';
import { Canvas } from './Canvas';
import { CART_QUANTITY_CURSOR_KEY } from '@components/cursor/switch/config';
import { useCursor } from '@context/cursor';
import {
  TDisplay,
  TPending,
} from '@t/image';

export type TPassedProps = {
  config: TDisplay | TPending;
  canvas?: 'black' | 'white';
};
type TProps = Omit<
  TUseImageReturn,
  'boxProps'
> &
  TPassedProps & {
    size: number;
  };
export const Image: FC<TProps> = ({
  isFirstPosition,
  isHover,
  config,
  canvas = 'black',
  size,
  imageProps,
  backdropProps,
  onToggle
}) => {
  const {
    hoverKeyParts: [
      cursorKey,
      childSrc,
    ],
  } = useCursor();
  const isCheckoutHover =
    cursorKey ===
      CART_QUANTITY_CURSOR_KEY &&
    config.src === childSrc;
  const isAnyHover =
    isHover || isCheckoutHover;
  const Root = isFirstPosition
    ? Fragment
    : Portal;

  return (
    <Root>
      <Backdrop
        isFirstPosition={
          isFirstPosition
        }
        isShown={isAnyHover}
        fullScreenBackdropProps={
          backdropProps
        }
        {...config}
      />
      <Canvas
        canvas={canvas}
        {...imageProps}
        {...config}
        size={size}
        isFirstPosition={
          isFirstPosition
        }
      />
      <Design
        imageProps={imageProps}
        {...config}
        size={size}
      />
      <Container
        isShown={Boolean(
          !isFirstPosition ||
            (isFirstPosition &&
              isAnyHover),
        )}
        isHover={isCheckoutHover}
        isParentHover={isHover}
        isFirstPosition={
          isFirstPosition
        }
        style={imageProps.style}
        onToggle={onToggle}
        {...config}
      />
    </Root>
  );
};
