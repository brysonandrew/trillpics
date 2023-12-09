import type { FC } from 'react';
import { TTextProps } from './config';
import { Text as _Text } from './index';
import clsx from 'clsx';

export const Title0: FC<TTextProps> = ({classValue, ...props}) => {
  return <_Text classValue={clsx('text-xl lg:text-4xl text-white-1 font-light uppercase tracking-1 lg:tracking-2.5', classValue)} {...props} />;
};
