import {
  FC,
  PropsWithChildren,
} from 'react';

export const TitleNav: FC<
  PropsWithChildren
> = ({ children }) => (
  <span className='relative text-sm uppercase whitespace-nowrap tracking-widest font-display'>
    {children}
  </span>
);
