import { FC } from 'react';
import { TButtonMotionProps } from '@t/dom';
import { Button } from './Button';

type TProps = TButtonMotionProps;
export const Add: FC<TProps> = (
  props,
) => {
  return (
    <Button
      variant='add'
      gradient='bg-emerald-teal-cyan'
      iconChar='+'
      type='submit'
      {...props}
    >
      add to cart
    </Button>
  );
};
