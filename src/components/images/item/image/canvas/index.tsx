import { TUseImageReturn } from '@components/images/useImage';
import { TImgMotionProps } from '@brysonandrew/config-types';
import { resolveCompositeKey } from '@utils/keys';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TPassedProps } from '@components/images/item/image/config/types';

const SCALE = 1; // 0.975;
const PADDING = (1 - SCALE) * 0.5;

type TProps = TImgMotionProps &
  Pick<TPassedProps, 'canvas'> & {
    size: number;
    isOpen: boolean;
    imageProps: TUseImageReturn['imageProps'];
  };
export const Canvas: FC<TProps> = ({
  src,
  size,
  isOpen,
  imageProps: {
    style: imageStyle,
    ...restImageProps
  },
  id,
  layoutId,
  canvas,
  ...props
}) => {
  const key = resolveCompositeKey(
    id,
    layoutId,
  );

  return (
    <motion.div
      className={clsx(
        'fill',
        isOpen ? 'zoom-out' : 'zoom-in',
      )}
      style={imageStyle}
      {...restImageProps}
      {...props}
      layoutId={layoutId}
      key={key}
    />
  );
};
{
  /* <Canvas
        imageProps={imageProps}
        isOpen={isOpen}
        layoutId={`canvas:${uniqueId}`}
        {...config}
        size={size}
        canvas={canvas}
      /> */
}
