import { FilterAnimate } from '.';
import { FC } from 'react';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@t/index';
import { TPartialBrightenConfigOptions, resolveBrightenProps } from '../effects/brighten';


type TProps = TPartialBrightenConfigOptions &
  TClassValueProps &
  TChildrenPartialProps;
export const Brighten: FC<TProps> = ({
  children,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveBrightenProps(options)}>
      {children}
    </FilterAnimate>
  );
};
