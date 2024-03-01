import type { FC } from 'react';
import { Image as _Image } from '@components/images/image';
import { motion } from 'framer-motion';
import { TCell } from '../config';
import { resolveConfigFromSize } from '@components/images/image/resolveDimensionsFromSize';
import { Resolve } from '@components/collection/Resolve';

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
  const [_, resolver] =
    cell.row.original.cols[index];
  const colsCount =
    cell.row.original.cols.length;
  const rowIndex = cell.row.index;

  return (
    <Resolve resolver={resolver}>
      {(src) => {
        const imageConfig =
          resolveConfigFromSize({
            size: 320,
            colIndex: index,
          });
        return (
          <_Image
            id={src}
            {...imageConfig}
            boxChildren={
              <motion.kbd
                className='center absolute top-0 left-0 h-8 px-3 rounded-full bg-gray-05 shadow text-black z-50'
                style={{
                  x:
                    size * 0.05 +
                    size * index,
                  y: size * 0.05,
                }}
              >
                {rowIndex * colsCount +
                  index}
              </motion.kbd>
            }
          >
            {({ imageProps }) => {
              return (
                <motion.img
                  src={src}
                  alt={src}
                  {...imageProps}
                  layoutId={src}
                />
              );
            }}
          </_Image>
        );
      }}
    </Resolve>
  );
};
