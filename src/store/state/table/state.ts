import { TTableState } from "~/store/state/table/types";
import { TStateHandler } from "~/store/types";
import { tableUpdateState } from "~/store/state/table/update/table";

export const tableState: TStateHandler<
  TTableState
> = (...args) => {
  return {
    table: {
      isVerticalScroll: false,
      size: 0,
      rows: [],
      columns: [],
      count: { rows: 0, columns: 0 },
      ...tableUpdateState(...args),
    },
  };
};
