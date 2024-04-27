import type {
  Row as TTanstackRow,
  RowModel,
} from "@tanstack/react-table";
import type {
  FixedSizeListProps,
  ListChildComponentProps,
} from "react-window";
import { FixedSizeList } from "react-window";
import { BlurXy } from "~/components/blur/xy";
import { useScroll } from "~/context/scroll";
import { useViewport } from "~/context/viewport";
import { TPartialFixedTableProps } from "~/shell/pics";
import { TRow } from "~/shell/pics/use-pics-table";
import { Row } from "./row";
import {
  TBaseRow,
  TTable,
} from "./types";

const RenderRow = <T extends TBaseRow>(
  props: ListChildComponentProps<
    TTanstackRow<T>[]
  >
) => {
  return <Row<T> {...props} />;
};

type TProps<T extends TBaseRow> =
  TPartialFixedTableProps & {
    table: TTable<T>;
    rowHeight: number;
  };
export const Virtualize = <
  T extends TBaseRow
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
  const vp = useViewport();

  if (!vp.isDimensions) return null;
  return (
    <FixedSizeList<TTanstackRow<T>[]>
      // onItemsRendered={console.log}

      onScroll={onUpdate}
      width={vp.width}
      height={vp.height}
      itemCount={rows.length}
      itemData={rows.map(
        (row: TTanstackRow<T>) => row
      )}
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
      innerElementType={BlurXy}
      direction="ltr"
    >
      {RenderRow}
    </FixedSizeList>
  );
};
