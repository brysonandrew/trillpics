import { useMemo } from "react";
import { useScreen } from "~/context/screen";
import { APPROX_IMAGE_SIZE } from "~/constants/images";
import { useTrillPicsStore } from "~/store/index";
import {
  TPic,
  TPics,
} from "~/store/slices/pics/types";
import { TPicsRow } from "~/store/slices/table/types";

export type TRow = TPicsRow
export const usePicsTable = () => {
  const { pics, countPics } =
    useTrillPicsStore(
      ({ pics, countPics }) => ({
        pics,
        countPics,
      })
    );
  const picsCount = countPics();
  const screen = useScreen(); 
  const { isDimensions, isResizing } =
    screen;
  const results = useMemo(() => {
    if (!isDimensions)
      return { rows: [], size: 0 };
    const currPics = pics();

    const columnsCount = Math.ceil(
      screen.width / APPROX_IMAGE_SIZE
    );
    const rowsCount = Math.ceil(
      picsCount / columnsCount
    );
    const rows: TRow[] = [
      ...Array(rowsCount),
    ].map((_, ri) => {
      const columns: TPics = [
        ...Array(columnsCount),
      ].map((__, ci) => {
        const index =
          ri * columnsCount + ci;
        const item: TPic =
          currPics[index];

        return item;
      });

      return {
        columns,
      };
    });

    const size = Math.floor(
      screen.width / columnsCount
    );

    const isVerticalScroll =
      size * rowsCount >
      screen.height;

    return {
      rows,
      size,
      isVerticalScroll,
    };
  }, [
    pics,
    picsCount, //update when num pics change
    isDimensions,
    isResizing,
  ]);
  return results;
};

// export type TUsePicsTable = ReturnType<
//   typeof usePicsTable
// >;
