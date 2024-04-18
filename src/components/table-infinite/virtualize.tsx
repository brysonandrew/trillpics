import type {
  Row as TRow,
  RowModel,
} from "@tanstack/react-table";
import type { ListChildComponentProps } from "react-window";
import { FixedSizeList } from "react-window";
import { useScroll } from "@/shell/providers/context/scroll";
import { useViewport } from "@/shell/providers/context/viewport";
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
export const Virtualize = <
  T extends TBaseRow
>({
  table,
  rowHeight,
}: TProps<T>) => {
  const rowModel: RowModel<T> =
    table.getRowModel();
  const rows: TRow<T>[] = rowModel.rows;
  const { onUpdate, listRef } =
    useScroll();
  const vp = useViewport();

  if (!vp.isDimensions) return null;
  return (
    <FixedSizeList<TRow<T>[]>
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
    >
      {RenderRow}
    </FixedSizeList>
  );
};
