import { APPROX_IMAGE_SIZE } from '@constants/images';
import { BoundingBox } from 'framer-motion';
import { TInfiniteQueryParams } from './hooks/useQueryInfinite';

export type TState = {
  rowRect: BoundingBox | null;
  queryParams: TInfiniteQueryParams;
  activeRow: string | null;
};

export const LOADING_PREFIX =
  '__LOADING ';
export const DEFAULT_PAGE_SIZE = 2;
export const DEFAULT_INIT_PAGE = 0;

const MIN_WIDTH = APPROX_IMAGE_SIZE;

export const resolveColumnWidth = ({
  widthRecord,
  columnKey,
  rowRect,
  count,
}: any) => {
  if (rowRect === null) return null;
  const average =
    (rowRect.right - rowRect.left) /
    count;
  return (
    widthRecord[columnKey] ??
    Math.max(average, MIN_WIDTH)
  );
};

export const resolveColumnKey = (
  source: any,
) => source.column.id;
