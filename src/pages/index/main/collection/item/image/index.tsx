import { TUseImageReturn } from '@components/image/useImage';
import { Backdrop } from './Backdrop';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { FC, Fragment } from 'react';
import { Portal } from '@components/image/Portal';
import { Info } from './info';
import { Design } from './Design';
import { Canvas } from './Canvas';
import { CART_CURSOR_KEY } from '@components/cursor/switch/config';

export type TPassedProps = {
  name?: string;
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
    isHover: isHoverAdd,
    handlers,
  } = useHoverKey(
    CART_CURSOR_KEY,
    src,
    'Add to shopping cart',
  );

  const isAnyHover =
    isHover || isHoverAdd;

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
      <Info
        name={name}
        isShown={Boolean(
          !isFirstPosition ||
            (isFirstPosition &&
              isAnyHover),
        )}
        isHover={isHoverAdd}
        handlers={handlers}
        src={src}
        isFirstPosition={
          isFirstPosition
        }
        style={imageProps.style}
      />
    </Root>
  );
};
