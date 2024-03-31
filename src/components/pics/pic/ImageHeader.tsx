import {
  THeader,
  CELL_HEAD_PROPS,
} from '@pages/home/pics/columns/config';
import type { FC } from 'react';

export const RowHeader: FC<THeader> = (
  cell: THeader,
) => {
  return (
    <div {...CELL_HEAD_PROPS}>Row</div>
  );
};
