import { TUseImageReturn } from '@components/images/useImage';
import { TUseLocalStorageForm } from '@context/checkout/useLocalStorageForm';
import { useDarkMode } from '@brysonandrew/dark-mode';
import { TImgMotionProps } from '@brysonandrew/config-types';
import { TSpecifications } from '@t/image';
import { resolveCompositeKey } from '@utils/keys';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TPassedProps } from '.';

const SCALE = 0.975;
const PADDING = (1 - SCALE) * 0.5;

type TProps = TImgMotionProps &
  Pick<TPassedProps, 'canvas'> & {
    // src: string;
    size: number;
    isFirstPosition: boolean;
    form: TUseLocalStorageForm<TSpecifications>;
    imageProps: TUseImageReturn['imageProps'];
  };
export const Canvas: FC<TProps> = ({
  src,
  size,
  isFirstPosition,
  form,
  imageProps,
  layoutId,
  canvas,
  ...props
}) => {
  const dm = useDarkMode();
  const colorValue =
    form.watch('color');
  const style = imageProps.style;
  const height = style.height * SCALE;
  const paddingY = height * PADDING;
  const width = style.width * SCALE;
  const paddingX = width * PADDING;

  return (
    <motion.div
      className={clsx(
        'absolute inset-0',
        isFirstPosition
          ? 'zoom-in'
          : 'zoom-out',
      )}
      {...imageProps}
      {...props}
      style={{
        ...style,
        filter: isFirstPosition
          ? `invert(${
              canvas === 'white'
                ? 100
                : 0
            }%) brightness(${
              dm.isDarkMode ? 100 : 100
            }%)`
          : `invert(${
              colorValue === 'white'
                ? 100
                : 0
            }%) brightness(${
              dm.isDarkMode ? 100 : 100
            }%)`,
      }}
      key={resolveCompositeKey(
        imageProps.key,
        layoutId,
      )}
      layoutId={layoutId}
    >
      {/* <motion.img
        className='relative'
        src={src}
        alt='t-shirt'
        width={width}
        height={height}
        style={{
          left: paddingX,
          top: paddingY,
        }}
      /> */}
    </motion.div>
  );
};
