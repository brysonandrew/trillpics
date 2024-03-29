import {
  getCoreRowModel,
  type RowModel,
  useReactTable,
  Table,
  TableOptions,
} from "@tanstack/react-table";
import { Body } from "./body";
import { TBaseRow } from "./types";

type TProps = {
  rows: any[];
  columns: any;
  rowHeight: number;
};
export const TableInfinite = <
  T extends TBaseRow
>({
  rows,

  columns,
  rowHeight,
}: TProps) => {
  const options: TableOptions<T> = {
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  };
  const table: Table<T> =
    useReactTable<T>(options);
  const rowModel: RowModel<T> =
    table.getRowModel();
  const count: number =
    rowModel.rows.length;

  return (
    <Body<T>
      table={table}
      rowHeight={rowHeight}
      emptyProps={{
        isEmpty: count === 0,
      }}
    />
  );
};
