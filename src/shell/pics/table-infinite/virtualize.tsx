import { memo } from "react";
import type {
  Row as TRow,
  RowModel,
} from "@tanstack/react-table";
import type { ListChildComponentProps } from "react-window";
import { FixedSizeList } from "react-window";
import { BlurXy } from "~/components/blur/xy";
import { useScroll } from "~/context/scroll";
import { useViewport } from "~/context/viewport";
import { Row } from "./row";
import {
  TBaseRow,
  TTable,
} from "./types";

const RenderRow = <T extends TBaseRow>(
  props: ListChildComponentProps<
    TRow<T>[]
  >
) => {
  return <Row<T> {...props} />;
};

type TProps<T extends TBaseRow> = {
  table: TTable<T>;
  rowHeight: number;
};
export const Virtualize = memo(
  <T extends TBaseRow>({
    table,
    rowHeight,
  }: TProps<T>) => {
    const rowModel: RowModel<T> =
      table.getRowModel();
    const rows: TRow<T>[] =
      rowModel.rows;
    const { onUpdate, listRef } =
      useScroll();
    const vp = useViewport();

    if (!vp.isDimensions) return null;
    return (
      <FixedSizeList<TRow<T>[]>
        // onItemsRendered={console.log}
        onScroll={onUpdate}
        width={vp.width}
        height={vp.height}
        itemCount={rows.length}
        itemData={rows.map(
          (row: TRow<T>) => row
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
  }
);
