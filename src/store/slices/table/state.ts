import { TTableState } from "~/store/slices/table/types";
import { TStateHandler } from "~/store/types";
import { tableUpdateState } from "~/store/slices/table/update/table";

export const tableState: TStateHandler<
  TTableState
> = (...args) => {
  return {
    table: {
      isVerticalScroll: false,
      size: 0,
      rows: [],
      columns: [],
      ...tableUpdateState(...args),
    },
  };
};
