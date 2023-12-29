import clsx from 'clsx';
import {
  FC,
  PropsWithChildren,
} from 'react';

export const GRID_CLASS_VALUE =
  'lg:grid-cols-2 xxl:grid-cols-3' as const;

type TProps = PropsWithChildren;
export const Collection: FC<TProps> = ({
  children,
}) => {
  return (
    <section className='w-full column'>
      <div className='relative w-container'>
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
