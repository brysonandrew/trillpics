import { Table } from "@tanstack/react-table";

export type TBaseRow = object;

export type TBaseCellProps = {
  columnKey: string;
  count: number;
};

export type TBaseColumn = {
  accessorKey: string;
};

export type TTable<T extends TBaseRow> = Table<T>;

