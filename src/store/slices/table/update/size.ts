import { TTableSizeConfig } from "~/store/slices/table/types";
import {
  SCROLLBAR_BORDER_WIDTH,
  SCROLLBAR_WIDTH,
} from "~uno/preflights";
const SCROLLBAR_X =
  SCROLLBAR_WIDTH +
  SCROLLBAR_BORDER_WIDTH * 2;

export const tableUpdateSize = ({
  count,
  ...screen
}: TTableSizeConfig) => {
  const nextSize = Math.floor(
    (screen.width - SCROLLBAR_X) / // adjust for scroll bar)
      count.columns
  );
  return nextSize;
};
