import { useMemo } from "react";
import { useViewport } from "@shell/providers/context/viewport";
import { APPROX_IMAGE_SIZE } from "@constants/images";
import { useVideoStore } from "@store/index";
import {
  TPic,
  TPics,
} from "@store/types";

export type TRow = {
  cols: TPic[];
};
export const usePicsTable = () => {
  const { pics, countPicsEntries, countPics } =
    useVideoStore();
  const viewport = useViewport();
  const { isDimensions, isResizing } =
    viewport;

  const count = countPicsEntries();
  const currPics = pics();
  const picsCount = countPics();

  const results = useMemo(() => {
    if (!isDimensions)
      return { rows: [], size: 0 };

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

    return {
      rows,
      size,
    };
  }, [
    count,
    currPics,
    picsCount,
    isDimensions,
    isResizing,
  ]);
  return results;
};

export type TPicsTable = ReturnType<
  typeof usePicsTable
>;
