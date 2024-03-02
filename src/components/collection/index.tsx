import { TTitleProps } from '@brysonandrew/config-types';
import clsx from 'clsx';
import {
  FC,
  PropsWithChildren,
} from 'react';

export const GRID_CLASS_VALUE =
  'md:grid-cols-2 xl:grid-cols-3' as const;

type TProps = PropsWithChildren<
  Partial<TTitleProps>
>;
export const Collection: FC<TProps> = ({
  children,
}) => {
  return (
    <main className='relative w-full column'>
      <div className='w-container'>
        <ul
          className={clsx(
            'grid grid-cols-1',
            GRID_CLASS_VALUE,
          )}
        >
          {children}
        </ul>
      </div>
    </main>
  );
};
