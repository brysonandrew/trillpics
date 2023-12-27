import { FC } from 'react';
import { TButtonMotionProps } from '@t/dom';
import {
  Button,
  TPassedProps,
} from './Button';
import { useCheckout } from '@context/checkout';

type TProps = TPassedProps &
  TButtonMotionProps & {
    cartItemCount: number;
  };
export const Add: FC<TProps> = ({
  cartItemCount,
  ...props
}) => {
  const { onItemsAdd } = useCheckout();
  const handleTap = () => {
    onItemsAdd(props.src);
  };
  return (
    <Button
      variant='add'
      gradient='bg-emerald-teal-cyan'
      iconChar='+'
      onTap={handleTap}
      {...props}
    >
      {cartItemCount > 0
        ? 'add'
        : 'add to cart'}
    </Button>
  );
};
