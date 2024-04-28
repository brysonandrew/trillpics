import { useMemo } from "react";
import { createColumnHelper } from "@tanstack/react-table";
import { Pic } from "~/shell/pics/pic";
import { DIRECTORS_MODE_PATH_VALUE } from "~/constants/params";
import { PicDirectorsMode } from "~/shell/pics/pic/directors-mode";
import { useNavigationActive } from "~/hooks/use-navigation/active";
import {
  TPicsRow,
  TPicsRows,
} from "~/store/slices/table/types";

export const usePicsColumns = (
  rows: TPicsRows,
  size: number
) => {
  const columnHelper =
    createColumnHelper<TPicsRow>();
  const isDirectorsMode =
    useNavigationActive(
      DIRECTORS_MODE_PATH_VALUE
    );
  const results = useMemo(() => {
    const firstRowColsCount =
      rows[0]?.columns.length ?? null;
    if (
      firstRowColsCount === null ||
      firstRowColsCount < 1
    )
      return [];

    const PicFc = isDirectorsMode
      ? PicDirectorsMode
      : Pic;

    return [
      ...Array(firstRowColsCount),
    ].map((_, index) => {
      const col = columnHelper.accessor(
        "columns",
        {
          cell: (cell) => {
            return (
              <PicFc
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
  }, [rows, isDirectorsMode]);

  return results;
};
