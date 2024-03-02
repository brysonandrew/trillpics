import { BREAKPOINT_INT_RECORD } from '@constants/css';
import { useMemo } from 'react';
import { TBreakpointKey } from '@uno/theme';
import { GRID_CLASS_VALUE } from '@components/collection';
import { TViewport } from '@hooks/window/useViewport';

const colSets =
  GRID_CLASS_VALUE.split(' ');
const colBreaks: [
  TBreakpointKey,
  number,
][] = colSets.reverse().map((v) => {
  const [bp, cols] = v.split(':');
  const colCount = parseInt(
    cols.replace('grid-cols-', ''),
  );
  return [
    bp as TBreakpointKey,
    colCount,
  ];
});

export const useSize = (
  vp: TViewport,
) => {
  const size = useMemo(() => {
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

      return (
        vp.containerWidth / colsCount
      );
    }

    return 0;
  }, [vp.isDimensions, vp.isResizing]);

  return size;
};
