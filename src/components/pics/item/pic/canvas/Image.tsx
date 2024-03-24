import { TUseLocalStorageForm } from '@shell/providers/context/checkout/useLocalStorageForm';
import { TImgMotionProps } from '@brysonandrew/config-types';
import { TSpecifications } from '@t/image';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TDimensions } from '@t/measure';
import { TPassedProps } from '@components/pics/item/pic/config/types';

const SCALE = 1; // 0.975;
const PADDING = (1 - SCALE) * 0.5;

type TProps = TImgMotionProps &
  TDimensions &
  Pick<TPassedProps, 'canvas'> & {
    size: number;
    isFirstPosition: boolean;
    form: TUseLocalStorageForm<TSpecifications>;
  };
export const Image: FC<TProps> = ({
  src,
  size,
  isFirstPosition,
  form,
  layoutId,
  canvas,
  style,
  width,
  height,
  ...props
}) => {
  form.watch('color');
  const paddingY = height * PADDING;
  const paddingX = width * PADDING;

  return (
    <motion.img
      className='relative'
      src={src}
      alt='CANVAS'
      width={width * SCALE}
      height={height * SCALE}
      style={{
        left: paddingX,
        top: paddingY,
        ...style,
      }}
      {...props}
    />
  );
};
