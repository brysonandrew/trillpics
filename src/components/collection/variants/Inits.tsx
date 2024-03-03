import { Item } from '@components/images/item';
import { Resolve } from '../Resolve';
import { useViewport } from '@shell/providers/context/viewport';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { P86Y } from '@brysonandrew/space';
import { resolveConfigFromSize } from '@components/images/image/resolveDimensionsFromSize';
import { useBase } from '@shell/providers/context/base';

export const Inits = () => {
  const { inits } = useBase();
  const { isDarkMode } = useDarkMode();
  const { size } = useViewport();
  if (size === 0) return <P86Y />;
  return (
    <>
      {inits.map(
        ({ name, path, resolver }) => {
          return (
            <Resolve
              key={path}
              resolver={resolver}
            >
              {(src) => {
                const imageConfig =
                  resolveConfigFromSize(
                    { size },
                  );
                if (!src) {
                  return (
                    <li
                      className='relative bg-black-3'
                      style={
                        imageConfig
                      }
                    />
                  );
                }
                return (
                  <Item
                    isShop
                    canvas={
                      isDarkMode
                        ? 'black'
                        : 'white'
                    }
                    size={size}
                    config={{
                      name,
                      src,
                    }}
                    imageConfig={
                      imageConfig
                    }
                  />
                );
              }}
            </Resolve>
          );
        },
      )}
    </>
  );
};
