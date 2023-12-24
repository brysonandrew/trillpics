import type { FC } from 'react';
import type { TContext } from './types';
import { Scroll } from '.';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <Scroll.Consumer>{children}</Scroll.Consumer>;
