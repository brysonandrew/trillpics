import type { FC } from 'react';
import type { TWorkshop } from './types';
import { Workshop } from '.';

type TConsumerProps = {
  children(
    values: TWorkshop,
  ): JSX.Element;
};
export const Consumer: FC<
  TConsumerProps
> = ({ children }) => (
  <Workshop.Consumer>
    {children}
  </Workshop.Consumer>
);
