import { TUseImageReturn } from '@components/images/useImage';
import { useCheckout } from '@context/checkout';
import { TUseLocalStorageForm } from '@context/checkout/useLocalStorageForm';
import { useDarkMode } from '@context/dark-mode';
import { TImgMotionProps } from '@t/dom';
import { TSpecifications } from '@t/image';
import { resolveCompositeKey } from '@utils/keys';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TPassedProps } from '.';

const SCALE = 0.975;
const PADDING = (1 - SCALE) * 0.5;

type TProps = TImgMotionProps &
  TUseImageReturn['imageProps'] & {
    src: string;
    size: number;
    isFirstPosition: boolean;
    form: TUseLocalStorageForm<TSpecifications>;
  };
export const Canvas: FC<TProps> = ({
  src,
  size,
  isFirstPosition,
  form,
  ...props
}) => {
  const colorValue =
    form.watch('color');
  const style = props.style;
  const height = style.height * SCALE;
  const paddingY = height * PADDING;
  const width = style.width * SCALE;
  const paddingX = width * PADDING;

  const dm = useDarkMode();
  return (
    <motion.div
      className={clsx(
        'absolute inset-0',
        isFirstPosition
          ? 'zoom-in'
          : 'zoom-out',
      )}
      {...props}
      style={{
        ...props.style,
        filter: isFirstPosition
          ? 'none'
          : `invert(${
              colorValue === 'white'
                ? 100
                : 0
            }%) brightness(${
              dm.isDarkMode ? 100 : 100
            }%)`,
      }}
      key={resolveCompositeKey(
        props.key,
        dm.darkKey,
        src,
      )}
    >
      <motion.img
        className='relative'
        src={src}
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
