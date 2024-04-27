import { FC } from "react";
import { FixedSizeListProps } from "react-window";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { TableInfinite } from "~/shell/pics/table-infinite";
import {
  TPicsTable,
  TRow,
} from "~/shell/pics/use-pics-table";
import type {
  Row as TTanstackRow,
} from "@tanstack/react-table";
import { usePicsColumns } from "./columns";
export type TPartialFixedTableProps =
  Partial<
    FixedSizeListProps<
      TTanstackRow<TRow>[]
    >
  >;
type TProps =
  TPartialFixedTableProps & {
    picsTable: TPicsTable;
  };
export const Pics: FC<TProps> = ({
  picsTable,
  ...props
}) => {
  const {
    rows,
    size: _size,
    isVerticalScroll,
  } = picsTable;
  const size = _size - 6;
  const columns = usePicsColumns(
    rows,
    size
  );
  if (rows.length === 0) {
    return (
      <div className="px-4">
        no pics
      </div>
    );
  }

  return (
    <>
      {isVerticalScroll && (
        <ScrollbarSeam />
      )}
      <TableInfinite<TRow>
        rowHeight={size}
        columns={columns}
        {...picsTable}
        rows={rows}
      />
    </>
  );
};
