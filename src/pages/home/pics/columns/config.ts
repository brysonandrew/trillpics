import { APPROX_IMAGE_SIZE } from '@constants/images';
import { TRow } from '@pages/home/pics/use-pics-table';
import {
  CellContext,
  HeaderContext,
} from '@tanstack/react-table';
import clsx from 'clsx';
export const WIDTH_DIMENSION = {
  width: APPROX_IMAGE_SIZE,
};
export const DIMENSIONS = {
  ...WIDTH_DIMENSION,
  height: APPROX_IMAGE_SIZE,
};
export const CELL_HEAD_STYLE = {
  style: {
    ...WIDTH_DIMENSION,
  },
};
export const CELL_HEAD_GROW_STYLE = {
  style: {
  },
};


export const CELL_025_STYLE = {
  style: {
  },
};

export const CELL_HEAD_PROPS = {
  ...CELL_HEAD_STYLE,
  className: 'center shrink-0 p-2',
};

export const CELL_PROPS = {
  className: 'center grow shrink-0',
};

export const CELL_025_PROPS = {
  ...CELL_025_STYLE,
  className: 'center grow shrink-0',
};

export const CELL_GROW_PROPS_CLASS =
  'relative grow w-full h-full';

export const CELL_HEAD_GROW_PROPS = {
  ...CELL_HEAD_GROW_STYLE,
  className: clsx(
    'center p-2',
    CELL_GROW_PROPS_CLASS,
  ),
};

export const CELL_GROW_PROPS = {
  className: clsx(
    CELL_GROW_PROPS_CLASS,
  ),
};

export const CELL_GROW_PADDING_PROPS = {
  className: clsx(
    CELL_GROW_PROPS_CLASS,
    'p-4',
  ),
};

export type TCell = CellContext<
  TRow,
  any
>;

export type THeader = HeaderContext<
  TRow,
  any
>;
