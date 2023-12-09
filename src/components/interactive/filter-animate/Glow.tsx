
import { FilterAnimate } from '.';
import { FC } from 'react';
import {
  TChildrenPartialProps,
  TClassValueProps,
} from '@t/index';
import { TPartialGlowConfigOptions, resolveGlowProps } from '../effects/glow';

type TProps = TPartialGlowConfigOptions &
  TClassValueProps &
  TChildrenPartialProps;
export const Glow: FC<TProps> = ({
  children,
  classValue,
  ...options
}) => {
  return (
    <FilterAnimate {...resolveGlowProps(options)} classValue={classValue}>
      {children}
    </FilterAnimate>
  );
};
