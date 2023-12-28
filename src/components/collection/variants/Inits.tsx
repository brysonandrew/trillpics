import { Item } from '@components/images/item';
import { INITS } from '../config/items';
import { Resolve } from '../Resolve';
import { useViewport } from '@context/viewport';

export const Inits = () => {
  const { size } = useViewport();
  return (
    <>
      {INITS.map(
        ({ name, path, resolver }) => {
          return (
            <Resolve
              key={path}
              resolver={resolver}
            >
              {(src) => (
                <Item
                  size={size}
                  config={{
                    name,
                    src,
                  }}
                />
              )}
            </Resolve>
          );
        },
      )}
    </>
  );
};
