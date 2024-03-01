import { TChildrenProps } from '@brysonandrew/config-types';
import { FC } from 'react';

export const TITLE_HEIGHT = 88;
type TProps = Partial<TChildrenProps>;
export const TitleRoot: FC<TProps> = ({ children }) => (
  <div
    className='column w-core'
    style={{ height: TITLE_HEIGHT }}
  >
    {children}
  </div>
);
