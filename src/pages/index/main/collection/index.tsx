import { Item } from './item';
import { ITEMS } from './config/items';
import { ResolveSrc } from './ResolveSrc';
import { useSize } from './useSize';

export const Collection = () => {
  const size = useSize();
  return (
    <section className='w-full column'>
      <div className='relative w-container'>
        <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
          {ITEMS.map(
            ({
              name,
              path,
              resolver,
            }) => {
              
              return (
                <ResolveSrc
                  key={path}
                  resolver={resolver}
                >
                  {(src) => (
                    <Item
                      name={name}
                      src={src}
                      size={size}
                    />
                  )}
                </ResolveSrc>
              );
            },
          )}
        </ul>
      </div>
    </section>
  );
};
