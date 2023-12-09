import { useMemo } from 'react';
import { TBaseRow } from '../types';
import { TInfiniteData } from './useQueryInfinite';

export const useTableData = <
  T extends TBaseRow,
>(
  data: TInfiniteData<T>,
) => {
  const tableData = useMemo(() => {
    const next = data.pages
      .filter(Boolean)
      .reduce(
        (
          a,
          { items = [], ...rest }: any,
        ) => {
          const currItems = a.items;
          const nextItems = items;

          return {
            items: [
              ...currItems,
              ...nextItems,
            ],
            ...rest,
          };
        },
        { items: [] } as any,
      );
    return next;
  }, [data]);

  return tableData;
};
