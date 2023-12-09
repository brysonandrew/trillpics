import type { CellContext } from '@tanstack/react-table';

export type TData = any;

export type TRow = any;
export type TCellString = CellContext<
  TRow,
  string
>;

export const EMPTY: TData = {};
