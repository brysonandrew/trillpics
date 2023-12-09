import type { FC } from 'react';
import {
  Shell,
  TProps as _TProps,
} from './index';
import { P1 } from '@components/layout/space/P1';

type TProps = _TProps;
export const WithPadding: FC<TProps> = (
  props,
) => {
  return (
    <>
      <Shell {...props} />
      <P1 />
    </>
  );
};
