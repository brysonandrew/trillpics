import { FC } from 'react';
import { TButtonMotionProps } from '@brysonandrew/config-types';
import { Button } from './Button';

type TProps = Omit<TButtonMotionProps, 'title'>;
export const Add: FC<TProps> = ({
  children,
  ...props
}) => {
  return (
    <Button
      variant='add'
      classValue='w-full'
      gradient='bg-emerald-primary-cyan'
      iconChar='+'
      type='submit'
      {...props}
    >
      {children}
    </Button>
  );
};
