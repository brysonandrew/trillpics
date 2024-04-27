import { useMemo } from "react";
import { useViewport } from "~/context/viewport";
import { APPROX_IMAGE_SIZE } from "~/constants/images";
import { useTrillPicsStore } from "~/store/index";
import {
  TPic,
  TPics,
} from "~/store/slices/pics/types";

export type TRow = {
  cols: TPics;
};
export const usePicsTable = () => {
  const { pics, countPics } =
    useTrillPicsStore(
      ({ pics, countPics }) => ({
        pics,
        countPics,
      })
    );
  const viewport = useViewport();
  const { isDimensions, isResizing } =
    viewport;
  const results = useMemo(() => {
    if (!isDimensions)
      return { rows: [], size: 0 };
    const currPics = pics();
    const picsCount = currPics.length;

    const colsCount = Math.ceil(
      viewport.width / APPROX_IMAGE_SIZE
    );
    const rowsCount = Math.ceil(
      picsCount / colsCount
    );
    const rows: TRow[] = [
      ...Array(rowsCount),
    ].map((_, ri) => {
      const cols: TPics = [
        ...Array(colsCount),
      ].map((__, ci) => {
        const index =
          ri * colsCount + ci;
        const item: TPic =
          currPics[index];

        return item;
      });

      return {
        cols,
      };
    });

    const size = Math.floor(
      viewport.width / colsCount
    );

    const isVerticalScroll =
      size * rowsCount >
      viewport.height;

    return {
      rows,
      size,
      isVerticalScroll,
    };
  }, [pics, isDimensions, isResizing]);
  return results;
};

export type TPicsTable = ReturnType<
  typeof usePicsTable
>;
