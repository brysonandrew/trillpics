import {
  getCoreRowModel,
  useReactTable,
  Table,
  TableOptions,
  ColumnDef,
} from "@tanstack/react-table";
import { TRow } from "~/shell/pics/config";
import { FixedSizeListProps } from "react-window";
import { TPartialFixedTableProps } from "~/shell/pics";
import { Virtualize } from "./virtualize";
import { TBaseRow } from "./types";
type TProps<T extends TBaseRow> =
  TPartialFixedTableProps & {
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
  ...props
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
      {...props}
    />
  );
};
