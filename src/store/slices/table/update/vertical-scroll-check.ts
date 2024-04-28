import { TTableVerticalScrollConfig } from "~/store/slices/table/types";

export const tableUpdateVerticalScrollCheck = ({
  size,
  rowsCount,
}: TTableVerticalScrollConfig) => {
  const isVerticalScroll =
    size * rowsCount > screen.height;
  return isVerticalScroll;
};
