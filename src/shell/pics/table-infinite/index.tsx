import { TDimensions } from "@brysonandrew/config-types";
import {
  getCoreRowModel,
  useReactTable,
  Table,
  TableOptions,
  ColumnDef,
} from "@tanstack/react-table";
import {
  TPartialFixedTableProps,
  TPicsBaseRow,
} from "~/store/slices/table/types";
import { Virtualize } from "./virtualize";

type TProps<T extends TPicsBaseRow> =
  TPartialFixedTableProps<T> &
    TDimensions & {
      rows: T[];
      columns: ColumnDef<T, any>[];
      rowHeight: number;
    };
export const TableInfinite = <
  T extends TPicsBaseRow
>({
  rows,
  columns,
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
      {...props}
    />
  );
};
