import { sortByIndex } from './sortByIndex';
import { useMemo } from 'react';
import { useViewport } from '@context/viewport';
import { APPROX_IMAGE_SIZE } from '@constants/images';

const EXAMPLES = [...Array(92)].map(
  (_, index) => `examples/${index}.png`,
);

export type TCol =
  (typeof EXAMPLES)[number];
export type TRow = {
  cols: TCol[];
};

export const useEntriesContext = () => {
  const viewport = useViewport();
  const { isDimensions, isResizing } =
    viewport;
  const results = useMemo(() => {
    if (isResizing || !isDimensions)
      return { rows: [], size: 0 };
    const sortedResults = [
      ...EXAMPLES,
    ].sort(sortByIndex);
    const count = sortedResults.length;
    const colsCount = Math.ceil(
      viewport.width /
        APPROX_IMAGE_SIZE,
    );
    const rowsCount = Math.ceil(
      count / colsCount,
    );
    const rows: TRow[] = [
      ...Array(rowsCount),
    ].map((_, ri) => {
      const cols: TCol[] = [
        ...Array(colsCount),
      ].map((__, ci) => {
        const index =
          ri * colsCount + ci;
        const item: TCol =
          sortedResults[index];

        return item;
      });
      return {
        cols,
      };
    });

    const size = Math.floor(
      viewport.width / colsCount,
    );

    return {
      rows,
      size,
    };
  }, [
    EXAMPLES,
    isDimensions,
    isResizing,
  ]);

  return results;
};

export type TEntriesContext =
  ReturnType<typeof useEntriesContext>;
