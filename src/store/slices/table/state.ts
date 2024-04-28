import { TTableState } from "~/store/slices/table/types";
import { TStateHandler } from "~/store/types";
import { tableUpdateState } from "~/store/slices/table/update/table";

export const tableState: TStateHandler<
  TTableState
> = (...args) => {
  const [set, get] = args;
  return {
    table: {
      isVerticalScroll: false,
      size: 0,
      rows: [],
      ...tableUpdateState(...args),
    },
  };
};
