import { FC } from 'react';
import { TButtonMotionProps } from '@t/dom';
import {
  Button,
  TPassedProps,
} from './Button';
import { useCheckout } from '@context/checkout';
import { CART_QUANTITY_CURSOR_KEY } from '@components/cursor/switch/config';
import { useHoverKey } from '@hooks/cursor/useHoverKey';

type TProps = TPassedProps &
  TButtonMotionProps;
export const Remove: FC<TProps> = (
  props,
) => {
  const {
    isHover: isHoverAdd,
    handlers,
  } = useHoverKey(
    CART_QUANTITY_CURSOR_KEY,
    props.src,
    'Add to shopping cart',
  );
  const { onItemsRemove } =
    useCheckout();
  const handleTap = () => {
    onItemsRemove(props.src);
  };
  return (
    <Button
      variant='remove'
      gradient='bg-fuchsia-pink-rose'
      iconChar='x'
      onTap={handleTap}
      {...props}
    >
      remove
    </Button>
  );
};
