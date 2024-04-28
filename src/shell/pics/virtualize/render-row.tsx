import type { ListChildComponentProps } from "react-window";
import { TPicsRow, TPicsRows } from "~/store/slices/table/types";
import { Row } from "./row";

export const RenderRow = (
  props: ListChildComponentProps<TPicsRows>
) => {
  return <Row {...props} />;
};
