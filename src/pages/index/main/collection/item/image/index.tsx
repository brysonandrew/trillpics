import { TUseImageReturn } from '@components/image/useImage';
import { Backdrop } from './Backdrop';
import { FC, Fragment } from 'react';
import { Portal } from '@components/image/Portal';
import { Container } from './container';
import { Design } from './Design';
import { Canvas } from './Canvas';
import { CART_QUANTITY_CURSOR_KEY } from '@components/cursor/switch/config';
import { useCursor } from '@context/cursor';
import { Checkout } from './checkout';

export type TPassedProps = {
  name: string;
  src: string;
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
  name,
  src,
  canvas = 'black',
  size,
  imageProps,
  backdropProps,
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
    src === childSrc;

  const isAnyHover =
    isHover || isCheckoutHover;

  const Root = isFirstPosition
    ? Fragment
    : Portal;

  return (
    <Root>
      <Backdrop
        name={name}
        isFirstPosition={
          isFirstPosition
        }
        isShown={isAnyHover}
        src={src}
        fullScreenBackdropProps={
          backdropProps
        }
      />
      <Canvas
        src={src}
        canvas={canvas}
        {...imageProps}
        size={size}
        isFirstPosition={
          isFirstPosition
        }
      />
      <Design
        src={src}
        size={size}
        imageProps={imageProps}
      />
      <Container
        name={name}
        isShown={Boolean(
          !isFirstPosition ||
            (isFirstPosition &&
              isAnyHover),
        )}
        isHover={isCheckoutHover}
        isParentHover={isHover}
        src={src}
        isFirstPosition={
          isFirstPosition
        }
        style={imageProps.style}
      />
    </Root>
  );
};
