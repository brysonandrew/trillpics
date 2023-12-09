import { FC } from 'react';
import { TSpaceProps } from './config';
import { Space } from '.';

type TProps = TSpaceProps;
export const P5: FC<TProps> = (
  props,
) => (
  <Space spaceClass='p-5' {...props} />
);
