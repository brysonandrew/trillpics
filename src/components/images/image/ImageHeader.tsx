import {
  THeader,
  CELL_HEAD_PROPS,
} from '@pages/gallery/results/list/columns/config';
import type { FC } from 'react';

export const RowHeader: FC<THeader> = (
  cell: THeader,
) => {
  return (
    <div {...CELL_HEAD_PROPS}>Row</div>
  );
};
