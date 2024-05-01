import { TTableVerticalScrollConfig } from "~/store/state/table/types";

export const tableUpdateVerticalScrollCheck = ({
  size,
  rowsCount,
}: TTableVerticalScrollConfig) => {
  const isVerticalScroll =
    size * rowsCount > screen.height;
  return isVerticalScroll;
};
