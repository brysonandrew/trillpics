import { P1 } from '@components/layout/space/P1';
import { TDivProps } from '@brysonandrew/config-types';
import { FC } from 'react';
import { Title } from './Title';

export const Pair: FC<TDivProps> = ({
  title,
  children,
}) => (
  <div className='inline-row'>
    <Title>{title}</Title>
    <P1 />{children}
  </div>
);
