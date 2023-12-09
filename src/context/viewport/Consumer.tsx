import type { FC } from 'react';
import type { TContext } from './types';
import { Viewport } from '.';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <Viewport.Consumer>{children}</Viewport.Consumer>;
