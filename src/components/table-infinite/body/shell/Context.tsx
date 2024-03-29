import { createContext } from 'react';

type TContext = {
  emptyProps: {
    isEmpty: boolean;
    isFilters: boolean;
  };
  rowHeight: number;
};
export const Context =
  createContext<TContext>(
    {} as TContext,
  );
