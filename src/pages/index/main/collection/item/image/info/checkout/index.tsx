import {
  CSSProperties,
  FC,
  useMemo,
} from 'react';
import { TButtonMotionProps } from '@t/dom';
import { useCheckout } from '@context/checkout';
import { Remove } from './Remove';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';
import { Add } from './Add';
import { TPassedProps } from './Button';
import { Count } from './Count';
import clsx from 'clsx';
import { TUseHoverKey } from '@hooks/cursor/useHoverKey';
import { FADE_PRESENCE } from '@constants/animation';

type TProps = TButtonMotionProps &
  TPassedProps & {
    isShown: boolean;
    sharedStyle: CSSProperties;
    handlers: TUseHoverKey['handlers'];
  };
export const Checkout: FC<TProps> = ({
  sharedStyle,
  handlers,
  isInteraction: _isInteraction,
  isFirstPosition,
  isHover,
  isParentHover,
  ...props
}) => {
  const { items } = useCheckout();
  const cartItems = useMemo(
    () =>
      items.filter(
        (item) => item === props.src,
      ),
    [items, props.src],
  );
  const cartItemCount =
    cartItems.length;
  const isCartItems = cartItemCount > 0;

  const isInteraction =
    _isInteraction && isCartItems;

  const sharedProps = {
    isInteraction,
    isFirstPosition,
    isHover,
    isParentHover,
    ...props,
  };

  return (
    <motion.div
      className={clsx(
        'absolute w-full row-right',
        isFirstPosition
          ? 'left-6 right-6 bottom-6 overflow-hidden'
          : 'left-12 right-12 bottom-12',
      )}
      style={sharedStyle}
      layout
      {...handlers}
      {...{
        ...FADE_PRESENCE,
        animate: {
          opacity:
            !isFirstPosition || isHover
              ? 1
              : isParentHover
              ? 0.6
              : 0.2,
        },
      }}
    >
      <AnimatePresence>
        {isCartItems && (
          <>
            <Remove
              key='remove'
              {...sharedProps}
            />
            <Count
              key='count'
              {...sharedProps}
            >
              {cartItemCount}
            </Count>
          </>
        )}
        <Add
          key='add'
          cartItemCount={cartItemCount}
          {...sharedProps}
        />
      </AnimatePresence>
    </motion.div>
  );
};
