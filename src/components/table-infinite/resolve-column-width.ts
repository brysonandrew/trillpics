import { APPROX_IMAGE_SIZE } from "~/constants/images";
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