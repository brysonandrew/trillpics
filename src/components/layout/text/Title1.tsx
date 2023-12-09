import type { FC } from 'react';
import { TTextProps } from './config';
import { Text as _Text } from './index';

export const Title1: FC<TTextProps> = (props) => {
  return <_Text classValue="text-orange text-xl" {...props} />;
};
