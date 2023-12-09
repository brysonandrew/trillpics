import type { FC } from 'react';
import { TTextProps } from './config';
import { Text as _Text } from './index';
import clsx from 'clsx';

export const Title3: FC<TTextProps> = ({ classValue, ...props }) => {
  return (
    <_Text classValue={clsx('text-2xl sm:text-3xl lg:text-4xl xxl:text-5xl', classValue)} {...props} />
  );
};
