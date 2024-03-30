import { useMemo } from 'react';
import { useViewport } from '@shell/providers/context/viewport';
import { APPROX_IMAGE_SIZE } from '@constants/images';

const record = import.meta.glob(
  './video/pics/*.avif',
);
const entries = Object.entries(record);
const count =
entries.length;

export type TCol =
  (typeof entries)[number];
export type TRow = {
  cols: TCol[];
};

export const useEntriesContext = () => {
  const viewport = useViewport();
  const { isDimensions, isResizing } =
    viewport;
  const results = useMemo(() => {
    if (!isDimensions)
      return { rows: [], size: 0 };

    const sortedResults = entries;

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
    entries,
    isDimensions,
    isResizing,
  ]);
  return results;
};

export type TEntriesContext =
  ReturnType<typeof useEntriesContext>;
