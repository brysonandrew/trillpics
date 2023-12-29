import {
  FC,
  PropsWithChildren,
} from 'react';

export const TitleNav: FC<
  PropsWithChildren
> = ({ children }) => (
  <span className='text-nav'>
    {children}
  </span>
);


