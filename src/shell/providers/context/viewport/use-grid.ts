import { useMemo } from "react";
import { BREAKPOINT_INT_RECORD } from "../../../../constants/css";
import type { TBreakpointKey } from "~/uno/index";
import { TViewport } from "@/hooks/window/use-container-measure";
export const GRID_CLASS_VALUE =
  "sm:grid-cols-2 xl:grid-cols-3" as const;

const colSets =
  GRID_CLASS_VALUE.split(" ");
const colBreaks: [
  TBreakpointKey,
  number
][] = colSets.reverse().map((v) => {
  const [bp, cols] = v.split(":");
  const colCount = parseInt(
    cols.replace("grid-cols-", "")
  );
  return [
    bp as TBreakpointKey,
    colCount,
  ];
});

export const useGrid = (
  vp: TViewport
) => {
  const grid = useMemo(() => {
    if (vp.isDimensions) {
      const width = vp.width;

      const resolveColsCount = () => {
        for (const [
          bp,
          count,
        ] of colBreaks) {
          if (
            width >
            BREAKPOINT_INT_RECORD[bp]
          ) {
            return count;
          }
        }
        return 1;
      };

      const colsCount =
        resolveColsCount();

      return {
        size:
          vp.containerWidth / colsCount,
        colsCount,
      };
    }

    return { size: 0, colsCount: 0 };
  }, [vp.isDimensions, vp.isResizing]);

  return grid;
};

export type TUseGrid = ReturnType<
  typeof useGrid
>;
