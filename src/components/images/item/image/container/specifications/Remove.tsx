import { FC } from 'react';
import { TButtonMotionProps } from '@brysonandrew/config-types';
import { Button } from './Button';
import { useCheckout } from '@shell/providers/context/checkout';
import {
  CUSTOM_CURSOR_KEY,
  useHoverKey,
} from '@brysonandrew/cursor';
import { TCheckoutPassedProps } from '@components/images/item/image/config/types';

type TProps = TCheckoutPassedProps &
  TButtonMotionProps;
export const Remove: FC<TProps> = (
  props,
) => {
  const {
    isHover: isHoverAdd,
    handlers,
  } = useHoverKey(
    CUSTOM_CURSOR_KEY,
    props.config.src,
    'Add to shopping cart',
  );
  const { onItemsRemove } =
    useCheckout();
  const handleTap = () => {
    onItemsRemove(
      props.copies[props.count - 1],
    );
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
