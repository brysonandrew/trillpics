import type { FC } from 'react';
import { TTextProps } from './config';
import { Text as _Text } from './index';

export const N: FC<TTextProps> = (
  props,
) => {
  return (
    <_Text
      classValue='relative font-display-led text-main-inverted'
      element='div'
      {...props}
    />
  );
};
