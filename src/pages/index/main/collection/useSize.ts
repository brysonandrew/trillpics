import { BREAKPOINT_INT_RECORD } from '@constants/css';
import { useViewport } from '@context/viewport';
import { useMemo } from 'react';

export const useSize = () => {
  const vp = useViewport();
  const size = useMemo(() => {
    if (vp.isDimensions) {
      const width = vp.containerWidth;

      const resolveColsCount = () => {
        if (
          width >
          BREAKPOINT_INT_RECORD.xl
        ) {
          return 3;
        }

        if (
          width >
          BREAKPOINT_INT_RECORD.md
        ) {
          return 2;
        }

        return 1;
      };

      const colsCount = resolveColsCount()

      return width / colsCount
    }

    return 0;

  }, [vp.isDimensions, vp.isResizing]);

  return size;
};
