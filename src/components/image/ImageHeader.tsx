import type { FC } from 'react';
import {
  CELL_HEAD_PROPS,
  THeader,
} from '../../pages/list/results/list/columns/config';

export const RowHeader: FC<
  THeader
> = (cell: THeader) => {
  console.log(cell)

  return (
    <div {...CELL_HEAD_PROPS}>
      Row
    </div>
  );
};
