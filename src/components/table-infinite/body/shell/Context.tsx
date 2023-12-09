import { createContext } from 'react';

type TContext = {
  header: JSX.Element;
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
