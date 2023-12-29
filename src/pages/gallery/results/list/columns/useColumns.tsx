import { useMemo } from 'react';
import { Image } from './cells/Image';
import { TRow } from '../../context/entries/useEntriesContext';
import { createColumnHelper } from '@tanstack/react-table';

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
          cell: (cell) => (
            <Image
              index={index}
              cell={cell}
              size={size}
            />
          ),
        },
      );
      return col;
    });
  }, [rows]);
  return results;
};
