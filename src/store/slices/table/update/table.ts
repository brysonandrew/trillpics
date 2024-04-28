import {
  TTableSetConfig,
  TTableUpdateState,
} from "~/store/slices/table/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";
import { tableUpdateSize } from "~/store/slices/table/update/size";
import { tableUpdateCount } from "~/store/slices/table/update/count";
import { tableUpdateRows } from "./rows";
import { tableUpdateColumns } from "./columns";
import { tableUpdateVerticalScrollCheck } from "./vertical-scroll-check";

export const tableUpdateState: TStateHandler<
  TTableUpdateState
> = (set, get) => ({
  update: {
    screen: (config) => {
      const cells = get().pics();
      get().table.update.create({
        cells,
        ...config,
      });
    },
    cells: (config) => {
      const screen = get().screen;
      get().table.update.create({
        screen,
        ...config,
      });
    },
    count: tableUpdateCount,
    create: ({
      screen,
      cells,
      PicFc,
    }) => {
      if (screen.isDimensions) {
        const update =
          get().table.update;
        const countResult =
          update.count({
            ...screen,
          });
        const rows = update.rows({
          cells,
          ...screen,
          ...countResult,
        });
        const size = update.size({
          ...screen,
          ...countResult,
        });
        const columns = update.columns({
          rows,
          size,
          PicFc,
        });
        const isVerticalScroll =
          update.verticalScrollCheck({
            size,
            ...countResult,
            ...screen,
          });
        get().table.update.set({
          rows,
          columns,
          size,
          isVerticalScroll,
        });
      }
    },
    rows: tableUpdateRows,
    columns: tableUpdateColumns,
    size: tableUpdateSize,
    verticalScrollCheck:
      tableUpdateVerticalScrollCheck,
    set: ({
      rows,
      columns,
      size,
      isVerticalScroll,
    }: TTableSetConfig) => {
      get().updateState(
        (draft: TState) => {
          draft.table.rows = rows;
          draft.table.columns = columns;
          draft.table.size = size;
          draft.table.isVerticalScroll =
            isVerticalScroll;
        }
      );
    },
  },
});
