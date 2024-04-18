import { useMemo } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { TRow } from '@/pages/home/pics/use-pics-table';
import { Pic } from '@/components/pic';

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
              <Pic
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
