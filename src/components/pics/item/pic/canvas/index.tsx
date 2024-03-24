import { TUseImageReturn } from '@components/pics/useImage';
import { TDivMotionProps, TImgMotionProps } from '@brysonandrew/config-types';
import { resolveCompositeKey } from '@utils/keys';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { TPassedProps } from '@components/pics/item/pic/config/types';

const SCALE = 1; // 0.975;
const PADDING = (1 - SCALE) * 0.5;

type TProps = TDivMotionProps &
  Pick<TPassedProps, 'canvas'> & {
    size: number;
    isOpen: boolean;
    imageProps: TUseImageReturn['designProps'];
  };
export const Canvas: FC<TProps> = ({
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
  id={src}
        imageProps={imageProps}
        isOpen={isOpen}
        layoutId={`canvas:${uniqueId}`}
        {...config}
        size={size}
        canvas={canvas}
      /> */
}
