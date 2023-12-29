import { TUseImageReturn } from '@components/images/useImage';
import { TImgMotionProps } from '@t/dom';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TImgMotionProps & {
  src: string;
  size: number;
  imageProps: TUseImageReturn['imageProps'];
};
export const Design: FC<TProps> = ({
  src,
  size,
  imageProps,
  ...props
}) => {
  const printSize = size
    ? imageProps.style.width * 0.4
    : 0;

  return (
    <motion.img
      className='pointer-events-none rounded-full'
      src={src}
      width={printSize}
      height={printSize}
      style={{
        position:
          imageProps.style.position,
        zIndex: imageProps.style.zIndex,
        top:
          imageProps.style.top +
          printSize * 0.55,
        left:
          imageProps.style.left +
          printSize * 0.75,
      }}
      {...props}
    />
  );
};
