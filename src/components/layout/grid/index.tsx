import { FC } from 'react';
import styled from '@emotion/styled';
import {
  TBoxes,
  TGridAccumulator,
  TBox,
  DEFAULT_COL_COUNT,
  TBoxSections,
} from './config';
import { Box } from './Box';
import { resolveCompositeKey } from '@utils/keys';
import { motion } from 'framer-motion';

const Root = styled(motion.ul)``;

type TProps = {
  sections: TBoxSections;
  colCount?: number;
};
export const Grid: FC<TProps> = ({
  sections,
  colCount = DEFAULT_COL_COUNT,
}) => {
  const grid =
    sections.reduce<TGridAccumulator>(
      (a, boxes: TBoxes, rowIndex) => {
        if (Array.isArray(boxes)) {
          boxes
            .filter(Boolean)
            .forEach(
              (
                box: TBox,
                colIndex: number,
                { length: boxCount },
              ) => {
                if (box === false)
                  return a;

                const colFraction =
                  1 / boxCount;
                const colSize =
                  colFraction *
                  colCount;
                const colStart =
                  colIndex *
                    colFraction *
                    colCount +
                  1;

                const gridColumn = `col ${colStart} / span ${colSize}`;
                const key =
                  resolveCompositeKey(
                    rowIndex,
                    colIndex,
                  );

                a.row = a.children.push(
                  <Box
                    key={key}
                    style={{
                      gridColumn,
                    }}
                  >
                    {box}
                  </Box>,
                );
              },
            );
          return a;
        }
        const box = boxes;
        if (box === false) return a;
        const gridColumn = `col / span ${colCount}`;
        const key = `${rowIndex}`;

        a.row = a.children.push(
          <Box
            key={key}
            style={{ gridColumn }}
          >
            {box}
          </Box>,
        );
        return a;
      },
      { children: [], col: 0, row: 0 },
    );

  return (
    <Root
      className='relative grid grid-gap-4'
      style={{
        gridTemplateColumns: `repeat(
    ${colCount},
    [col] 1fr
  )`,
        gridTemplateRows: `repeat(
    auto-fill,
    [row] 1fr
  )`,
      }}
    >
      {grid.children}
    </Root>
  );
};
