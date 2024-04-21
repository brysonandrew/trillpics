import {
  getCoreRowModel,
  useReactTable,
  Table,
  TableOptions,
  ColumnDef,
} from "@tanstack/react-table";
import { TRow } from "~/pages/home/pics/config";
import { Virtualize } from "./virtualize";
import { TBaseRow } from "./types";

type TProps<T extends TBaseRow> = {
  rows: TRow[];
  columns: ColumnDef<T, any>[];
  rowHeight: number;
};
export const TableInfinite = <
  T extends TBaseRow
>({
  rows,
  columns,
  rowHeight,
}: TProps<T>) => {
  const options: TableOptions<T> = {
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  };
  const table: Table<T> =
    useReactTable<T>(options);

  return (
    <Virtualize<T>
      table={table}
      rowHeight={rowHeight}
    />
  );
};
