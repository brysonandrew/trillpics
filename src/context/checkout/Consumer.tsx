import type { FC } from 'react';
import type { TContext } from './config';
import { Checkout } from '.';

type TConsumerProps = {
  children(values: TContext): JSX.Element;
};
export const Consumer: FC<TConsumerProps> = ({
  children,
}) => <Checkout.Consumer>{children}</Checkout.Consumer>;
