import type { FC } from 'react';
import { TCell } from '../../config';
import { useImage } from './useImage';
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';

type TProps = {
  index: number;
  cell: TCell;
  size: number;
};
export const Image: FC<TProps> = ({
  index,
  cell,
  size,
}) => {
  const src =
    cell.row.original.cols[index];
  const rowIndex = cell.row.index;
  const {
    isFirstPosition,
    boxProps,
    imageProps,
    backdropProps,
  } = useImage({
    width: size,
    height: size,
    offsetY: 0, //rowIndex * size,
  });
  const image = (
    <motion.img
      src={src}
      alt={src}
      {...imageProps}
      layoutId={src}
    />
  );
  return (
    <motion.div {...boxProps}>
      <>
        {isFirstPosition ? (
          image
        ) : (
          <>
            {createPortal(
              <>
                <motion.div
                  {...backdropProps}
                />
                {image}
              </>,
              document.body,
            )}
          </>
        )}
      </>
    </motion.div>
  );
};
