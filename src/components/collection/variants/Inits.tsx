import { Item } from '@components/images/item';
import { INITS } from '../config/items';
import { Resolve } from '../Resolve';
import { useViewport } from '@context/viewport';
import { useDarkMode } from '@context/dark-mode';

export const Inits = () => {
  const {isDarkMode}  = useDarkMode()
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
                  isShop
                  canvas={isDarkMode ? 'black' : 'white'}
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
