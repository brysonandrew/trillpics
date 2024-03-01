import { TTitleProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import {
  FC,
  PropsWithChildren,
} from 'react';

export const GRID_CLASS_VALUE =
  'lg:grid-cols-2 xxl:grid-cols-3' as const;

type TProps =
  PropsWithChildren<TTitleProps>;
export const Collection: FC<TProps> = ({
  title,
  children,
}) => {
  return (
    <section className='w-full column'>
      <div className='w-container'>
        {/* <h2 className='relative uppercase text-6xl z-10'>
          {title} 
        </h2> */}
        <ul
          className={clsx(
            'grid grid-cols-1',
            GRID_CLASS_VALUE,
          )}
        >
          {children}
        </ul>
      </div>
    </section>
  );
};
