import {
  FC,
  PropsWithChildren,
} from 'react';

type TProps = PropsWithChildren;
export const Collection: FC<TProps> = ({
  children,
}) => {
  return (
    <section className='w-full column'>
      <div className='relative w-container'>
        <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {children}
        </ul>
      </div>
    </section>
  );
};
