import type { ListChildComponentProps } from "react-window";
import {
  TPicsBaseRow,
  TPicsTableRows,
} from "~/store/slices/table/types";
import { Row } from "./row";

export const RenderRow = <
  T extends TPicsBaseRow
>(
  props: ListChildComponentProps<
    TPicsTableRows<T>
  >
) => {
  return <Row<T> {...props} />;
};
