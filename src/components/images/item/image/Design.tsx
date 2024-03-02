import { TUseImageReturn } from '@components/images/useImage';
import { TImgMotionProps } from '@brysonandrew/config-types';
import { motion } from 'framer-motion';
import { FC } from 'react';

type TProps = TImgMotionProps &
  TUseImageReturn['designProps'] & {
    src: string;
    size: number;
  };
export const Design: FC<TProps> = ({
  src,
  size,
  layoutId,
  style,
  ...props
}) => {
  const printSize = size
    ? style.width
    : 0;

  return (
    <motion.img
      className='pointer-events-none'
      src={src}
      width={printSize}
      height={printSize}
      style={{
        ...style,
        top: style.top + printSize * 0,
        left:
          style.left + printSize * 0,
      }}
      layoutId={layoutId}
      {...props}
    />
  );
};
