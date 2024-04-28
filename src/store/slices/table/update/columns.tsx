import { createColumnHelper } from "@tanstack/react-table";
import { Pic } from "~/shell/pics/pic";
import {
  TPicsRow,
  TTableColumnsConfig,
} from "~/store/slices/table/types";

export const tableUpdateColumns = ({
  rows,
  size,
}: TTableColumnsConfig) => {
  const firstRowColsCount =
    rows[0]?.columns.length ?? null;
  if (
    firstRowColsCount === null ||
    firstRowColsCount < 1
  )
    return [];
  const columnHelper =
    createColumnHelper<TPicsRow>();
  // const PicFc = isDirectorsMode
  //   ? PicDirectorsMode
  //   : Pic;

  return [
    ...Array(firstRowColsCount),
  ].map((_, index) => {
    const col = columnHelper.accessor(
      "columns",
      {
        cell: (cell) => {
          return (
            <Pic
              colIndex={index}
              cell={cell}
              size={size}
              maxColsCount={
                firstRowColsCount
              }
            />
          );
        },
      }
    );
    return col;
  });
};
