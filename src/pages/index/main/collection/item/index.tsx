import { FC } from 'react';
import { Image } from '@components/image';
import { resolveConfigFromSize } from '@components/image/resolveDimensionsFromSize';
import { motion } from 'framer-motion';
import { useDarkMode } from '@context/dark-mode';
import { resolveCompositeKey } from '@utils/keys';
import { Text } from './Text';
import { Add } from './Add';
import { Backdrop } from '../../../../../components/interactive/Backdrop';
import { useHover } from '@hooks/dom/useHover';
import clsx from 'clsx';

type TProps = {
  name?: string;
  src: string;
  canvas?: 'black' | 'white';
  size: number;
};
export const Item: FC<TProps> = ({
  name,
  src,
  size,
  canvas = 'black',
}) => {
  const canvasSrc = `/canvas/${canvas}/b1.png`;
  const dm = useDarkMode();
  const imageConfig =
    resolveConfigFromSize({ size });

  const {
    isHover: isHoverAdd,
    ...hoverAddHandlers
  } = useHover();

  return (
    <li
      className='relative'
      style={{
        width: size,
        height: size,
      }}
    >
      <Image {...imageConfig}>
        {({
          isHover,
          imageProps,
          isFirstPosition,
        }) => {
          const printSize = size
            ? imageProps.style.width *
              0.4
            : 0;

          return (
            <>
              {isFirstPosition && (
                <Backdrop
                  id={src}
                  isHover={
                    isHover ||
                    isHoverAdd
                  }
                />
              )}
              <motion.img
                className={clsx('absolute inset-0',isFirstPosition ? 'cursor-zoom-in' : 'cursor-zoom-out')}
                src={canvasSrc}
                {...imageProps}
                style={{
                  ...imageProps.style,
                  filter: `invert(${
                    (canvas ===
                      'white' &&
                      dm.isDarkMode) ||
                    (canvas ===
                      'black' &&
                      !dm.isDarkMode)
                      ? 100
                      : 0
                  }%) brightness(${
                    dm.isDarkMode
                      ? 100
                      : 100
                  }%)`,
                }}
                key={resolveCompositeKey(
                  imageProps.key,
                  dm.darkKey,
                  src,
                )}
                layoutId={resolveCompositeKey(
                  canvasSrc,
                  src,
                )}
              />
              <motion.img
                className='pointer-events-none rounded-full'
                src={src}
                width={printSize}
                height={printSize}
                style={{
                  position:
                    imageProps.style
                      .position,
                  zIndex:
                    imageProps.style
                      .zIndex,
                  top:
                    imageProps.style
                      .top +
                    printSize * 0.55,
                  left:
                    imageProps.style
                      .left +
                    printSize * 0.75,
                }}
                layoutId={src}
              />
              {name &&
                (!isFirstPosition ||
                  (isFirstPosition &&
                    isHover)) && (
                  <>
                    <Text
                      name={name}
                      isFirstPosition={
                        isFirstPosition
                      }
                      src={src}
                      style={{
                        position:
                          imageProps
                            .style
                            .position,
                        zIndex:
                          imageProps
                            .style
                            .zIndex,
                      }}
                    />
                    <Add
                      isFirstPosition={
                        isFirstPosition
                      }
                      src={src}
                      style={{
                        position:
                          imageProps
                            .style
                            .position,
                        zIndex:
                          imageProps
                            .style
                            .zIndex,
                      }}
                      isHover={
                        isHoverAdd
                      }
                      {...hoverAddHandlers}
                    />
                  </>
                )}
            </>
          );
        }}
      </Image>
    </li>
  );
};
