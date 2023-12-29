import { FC } from 'react';
import { TButtonMotionProps } from '@t/dom';
import { Button } from './Button';
import { useCheckout } from '@context/checkout';
import { CART_QUANTITY_CURSOR_KEY } from '@components/cursor/switch/config';
import { useHoverKey } from '@hooks/cursor/useHoverKey';
import { TCheckoutPassedProps } from '../..';

type TProps = TCheckoutPassedProps &
  TButtonMotionProps;
export const Remove: FC<TProps> = (
  props,
) => {
  const {
    isHover: isHoverAdd,
    handlers,
  } = useHoverKey(
    CART_QUANTITY_CURSOR_KEY,
    props.config.src,
    'Add to shopping cart',
  );
  const { onItemsRemove } =
    useCheckout();
  const handleTap = () => {
    onItemsRemove(props.copies[props.count - 1]);
  };
  return (
    <Button
      variant='remove'
      gradient='bg-fuchsia-pink-rose'
      classValue='mix-blend-difference bg-red'
      iconChar='x'
      onTap={handleTap}
      {...props}
    >
      remove
    </Button>
  );
};
