import { TElementProps } from '@t/dom';
import { FC } from 'react';

export const Title: FC<
  TElementProps
> = (props) => (
  <b
    className='text-sm text-gray'
    {...props}
  />
);
