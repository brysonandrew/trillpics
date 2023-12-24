import { FC } from 'react';
import { Image } from '@components/image';
import { resolveConfigFromSize } from '@components/image/resolveDimensionsFromSize';
import { motion } from 'framer-motion';
import { useDarkMode } from '@context/dark-mode';
import { resolveCompositeKey } from '@utils/keys';

type TProps = {
  size: number;
  canvasSrc: string;
  printSrc: string;
};
export const Item: FC<TProps> = ({
  size,
  canvasSrc,
  printSrc,
}) => {
  const dm = useDarkMode();
  const imageConfig =
    resolveConfigFromSize({ size });
  return (
    <li
      className='relative'
      style={{
        width: size,
        height: size,
      }}
    >
      <Image {...imageConfig}>
        {(imageProps) => {
          const printSize = size
            ? imageProps.style.width *
              0.4
            : 0;

          return (
            <>
              <motion.img
                className='absolute inset-0'
                src={canvasSrc}
                {...imageProps}
                style={{
                  ...imageProps.style,
                  filter: `invert(${
                    dm.isDarkMode
                      ? 0
                      : 100
                  }%) brightness(${
                    dm.isDarkMode
                      ? 100
                      : 100
                  }%)`,
                }}
                key={resolveCompositeKey(
                  imageProps.key,
                  dm.darkKey,
                  printSrc,
                )}
                layoutId={resolveCompositeKey(
                  canvasSrc,
                  printSrc,
                )}
              />
              <motion.img
                className='pointer-events-none rounded-full'
                src={printSrc}
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
                layoutId={printSrc}
              />
            </>
          );
        }}
      </Image>
    </li>
  );
};
