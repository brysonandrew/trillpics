import { FC } from 'react';
import { TButtonMotionProps } from '@t/dom';
import {
  Button,
  TPassedProps,
} from './Button';
import { useCheckout } from '@context/checkout';

type TProps = TPassedProps &
  TButtonMotionProps;
export const Remove: FC<TProps> = (
  props,
) => {
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
