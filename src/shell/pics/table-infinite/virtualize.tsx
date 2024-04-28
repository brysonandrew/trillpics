import type {
  Row as TTanstackRow,
  RowModel,
} from "@tanstack/react-table";
import { FixedSizeList } from "react-window";
import { BlurXy } from "~/components/blur/xy";
import { useScroll } from "~/context/scroll";
import { RenderRow } from "~/shell/pics/table-infinite/render-row";
import {
  TPicsBaseRow,
  TPicsTableTanstack,
  TPartialFixedTableProps,
  TPicsTableRows,
} from "~/store/slices/table/types";
import { TDimensions } from "@brysonandrew/config-types";

type TProps<T extends TPicsBaseRow> =
  TPartialFixedTableProps<T> &
    TDimensions & {
      table: TPicsTableTanstack<T>;
      rowHeight: number;
    };
export const Virtualize = <
  T extends TPicsBaseRow
>({
  table,
  rowHeight,
  ...props
}: TProps<T>) => {
  const rowModel: RowModel<T> =
    table.getRowModel();
  const rows: TTanstackRow<T>[] =
    rowModel.rows;
  const { onUpdate, listRef } =
    useScroll();

  return (
    <FixedSizeList<TPicsTableRows<T>>
      onScroll={onUpdate}
      itemCount={rows.length}
      itemData={rows.map((row) => row)}
      itemSize={rowHeight}
      itemKey={(
        index: number,
        data: any
      ) => {
        const key = data[index].id;
        return key;
      }}
      layout="vertical"
      ref={listRef}
      direction="ltr"
      {...props}
    >
      {RenderRow}
    </FixedSizeList>
  );
};
