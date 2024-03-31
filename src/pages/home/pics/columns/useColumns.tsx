import { useMemo } from 'react';
import { Image } from './cells/image';
import { createColumnHelper } from '@tanstack/react-table';
import { TRow } from '@pages/home/pics/use-pics-table';

export const useColumns = (
  rows: TRow[],
  size: number
) => {
  const columnHelper =
    createColumnHelper<TRow>();

  const results = useMemo(() => {
    const firstRowColsCount =
      rows[0]?.cols.length ?? null;
    if (
      firstRowColsCount === null ||
      firstRowColsCount < 1
    )
      return [];
    return [
      ...Array(firstRowColsCount),
    ].map((_, index) => {
      const col = columnHelper.accessor(
        'cols',
        {
          cell: (cell) => {
            return (
              <Image
                colIndex={index}
                cell={cell}
                size={size}
                maxColsCount={firstRowColsCount}
              />
            )
          },
        },
      );
      return col;
    });
  }, [rows]);
  
  return results;
};
