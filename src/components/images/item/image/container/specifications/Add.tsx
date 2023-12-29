import { FC } from 'react';
import { TButtonMotionProps } from '@t/dom';
import { Button } from './Button';

type TProps = TButtonMotionProps;
export const Add: FC<TProps> = ({
  children,
  ...props
}) => {
  return (
    <Button
      variant='add'
      classValue='w-full'
      gradient='bg-emerald-teal-cyan'
      iconChar='+'
      type='submit'
      {...props}
    >
      {children}
    </Button>
  );
};
