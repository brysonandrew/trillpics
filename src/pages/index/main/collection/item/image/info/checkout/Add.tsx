import { FC } from 'react';
import { TButtonMotionProps } from '@t/dom';
import { Button } from './Button';

type TProps = TButtonMotionProps & {
  cartItemCount: number;
};
export const Add: FC<TProps> = ({
  cartItemCount,
  ...props
}) => {
  return (
    <Button
      variant='add'
      gradient='bg-emerald-teal-cyan'
      iconChar='+'
      {...props}
    >
      add to cart
    </Button>
  );
};
