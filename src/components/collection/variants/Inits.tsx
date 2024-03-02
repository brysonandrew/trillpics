import { Item } from '@components/images/item';
import { INITS } from '../config/items';
import { Resolve } from '../Resolve';
import { useViewport } from '@shell/providers/context/viewport';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { P86Y } from '@brysonandrew/space';
import { resolveConfigFromSize } from '@components/images/image/resolveDimensionsFromSize';

export const Inits = () => {
  const { isDarkMode } = useDarkMode();
  const { size } = useViewport();
  if (size === 0) return <P86Y />;
  return (
    <>
      {INITS.map(
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
                    <div
                      className='relative bg-black-3'
                      style={{
                        ...imageConfig,
                        // left: imageConfig.offsetX,
                        // top: imageConfig.offsetY,
                      }}
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
