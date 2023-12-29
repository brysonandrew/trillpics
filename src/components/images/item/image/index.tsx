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
  TSpecifications,
} from '@t/image';
import { DEFAULT_VALUES } from '@context/checkout/config';
import { useLocalStorageForm } from '@context/checkout/useLocalStorageForm';
import { resolveCompositeKey } from '@utils/keys';
import { useDarkMode } from '@context/dark-mode';

export type TBasePassedProps = {
  canvas: 'black' | 'white';
};
export type TShopPassedProps =
  TBasePassedProps & {
    isShop: true;
    config: TDisplay;
  };
export type TCheckoutPassedProps =
  TBasePassedProps & {
    isShop: false;
    copies: TPending[]; // checkout only
    count: number;
    config: TPending;
  };
export type TPassedProps =
  | TShopPassedProps
  | TCheckoutPassedProps;
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
  size,
  imageProps,
  backdropProps,
  onToggle,
  ...passedProps
}) => {
  const { config, canvas } =
    passedProps;
  const { darkKey } = useDarkMode();
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
  const form =
    useLocalStorageForm<TSpecifications>(
      {
        defaultValues:
          passedProps.isShop
            ? DEFAULT_VALUES
            : passedProps.config,
      },
    );
  const canvasSrc = `/canvas/black/b1.png`;

  const uniqueId = resolveCompositeKey(
    config.src,
    darkKey,
    `shop:${passedProps.isShop}`,
  );

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
        imageProps={imageProps}
        isFirstPosition={
          isFirstPosition
        }
        form={form}
        layoutId={`canvas:${uniqueId}`}
        {...config}
        src={canvasSrc}
        size={size}
        canvas={canvas}
      />
      <Design
        imageProps={imageProps}
        layoutId={`design:${uniqueId}`}
        {...config}
        size={size}
      />
      <Container
        uniqueId={uniqueId}
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
        form={form}
        {...passedProps}
      />
    </Root>
  );
};
