import { TUseImageReturn } from '@components/image/useImage';
import { useDarkMode } from '@context/dark-mode';
import { resolveCompositeKey } from '@utils/keys';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TPassedProps } from '.';

const SCALE = 0.975;
const PADDING = (1 - SCALE) * 0.5;

type TProps = Required<
  Pick<TPassedProps, 'canvas'>
> &
  TUseImageReturn['imageProps'] & {
    src: string;
    size: number;
    isFirstPosition: boolean;
  };
export const Canvas: FC<TProps> = ({
  src,
  canvas,
  size,
  isFirstPosition,
  ...imageProps
}) => {
  const style = imageProps.style;
  const height = style.height * SCALE;
  const paddingY = height * PADDING;
  const width = style.width * SCALE;
  const paddingX = width * PADDING;

  const canvasSrc = `/canvas/${canvas}/b1.png`;
  const dm = useDarkMode();
  return (
    <motion.div
      className={clsx(
        'absolute inset-0',
        isFirstPosition
          ? 'zoom-in'
          : 'zoom-out',
      )}
      {...imageProps}
      style={{
        ...imageProps.style,
        filter: `invert(${
          (canvas === 'white' &&
            dm.isDarkMode) ||
          (canvas === 'black' &&
            !dm.isDarkMode)
            ? 100
            : 0
        }%) brightness(${
          dm.isDarkMode ? 100 : 100
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
    >
      <motion.img
        className='relative'
        src={canvasSrc}
        alt='t-shirt'
        width={width}
        height={height}
        style={{
          left: paddingX,
          top: paddingY,
        }}
      />
    </motion.div>
  );
};
