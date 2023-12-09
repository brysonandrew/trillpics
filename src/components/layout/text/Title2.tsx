import type { FC } from 'react';
import { TTextProps } from './config';
import { Text as _Text } from './index';

export const Title2: FC<TTextProps> = (props) => {
  return <_Text classValue="text-white-9 text-2xl lg:text-4xl" {...props} />;
};
