import {
  TTableSetConfig,
  TTableUpdateState,
} from "~/store/state/table/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";
import { tableUpdateSize } from "~/store/state/table/update/size";
import { tableUpdateCount } from "~/store/state/table/update/count";
import { tableUpdateRows } from "./rows";
import { tableUpdateVerticalScrollCheck } from "./vertical-scroll-check";

export const tableUpdateState: TStateHandler<
  TTableUpdateState
> = (set, get) => ({
  update: {
    screen: (config) => {
      const cells = get().pics();
      const update = get().table.update;
      const count = update.count({
        width: config.screen.width,
      });
      console.log(
        `update table with screen`,
        config
      );
      update.create({
        cells,
        count,
        ...config,
      });
    },
    cells: (config) => {
      const screen = get().screen;
      if (!screen.isDimensions) return;
      console.log(
        `update table with cells`,
        config
      );
      get().table.update.create({
        screen,
        count: get().table.count,
        ...config,
      });
    },
    count: tableUpdateCount,
    create: ({
      screen,
      cells,
      count,
    }) => {
      console.log("CREATE TABLE");
      const update = get().table.update;

      const rows = update.rows({
        cells,
        count,
        ...screen,
      });
      const size = update.size({
        count,
        ...screen,
      });
      
      const isVerticalScroll =
        update.verticalScrollCheck({
          rowsCount: count.rows,
          size,
          ...screen,
        });
      get().table.update.set({
        count,
        rows,
        size,
        isVerticalScroll,
      });
    },
    rows: tableUpdateRows,
    size: tableUpdateSize,
    verticalScrollCheck:
      tableUpdateVerticalScrollCheck,
    set: ({
      count,
      rows,
      size,
      isVerticalScroll,
    }: TTableSetConfig) => {
      get().updateState(
        (draft: TState) => {
          draft.table.count = count;
          draft.table.rows = rows;
          draft.table.size = size;
          draft.table.isVerticalScroll =
            isVerticalScroll;
        }
      );
    },
  },
});
