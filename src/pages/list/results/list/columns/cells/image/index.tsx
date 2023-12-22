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
  const colsCount =
    cell.row.original.cols.length;
  const rowIndex = cell.row.index;
  const {
    isFirstPosition,
    boxProps,
    imageProps,
    backdropProps,
  } = useImage({
    width: size,
    height: size,
    offsetX: size * index, //rowIndex * size,
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
      <motion.kbd
        className='center absolute top-0 left-0 h-8 px-3 rounded-full bg-gray-05 shadow text-black z-50'
        style={{
          x: size * 0.05 + size * index,
          y: size * 0.05,
        }}
      >
        {rowIndex * colsCount + index}
      </motion.kbd>
    </motion.div>
  );
};
