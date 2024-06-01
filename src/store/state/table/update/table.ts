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
import { shuffle } from "~/utils/array/shuffle";
import { tableUpdateRows } from "./rows";
import { tableUpdateVerticalScrollCheck } from "./vertical-scroll-check";
import precacheTable from "~app/precache.json";
const { length: cellsCount } =
  precacheTable;

export const tableUpdateState: TStateHandler<
  TTableUpdateState
> = (set, get) => ({
  update: {
    screen: (config) => {
      const state = get();
      let cells = state.pics;
      if (state.picsCount === 0) {
        cells = [
          ...Array(cellsCount),
        ].map((_, i) => `${i + 1}`);
        cells = shuffle(cells);
        set({ pics: cells, picsCount: cells.length });
      }
      const update = state.table.update;
      const count = update.count({
        width: config.screen.width,
      });
      console.log(
        `update table with screen`,
        config
      );
      const result = update.create({
        cells,
        count,
        ...config,
      });
      return result;
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

      return { size, ...count };
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
      get().set((draft: TState) => {
        draft.table.count = count;
        draft.table.rows = rows;
        draft.table.size = size;
        draft.table.isVerticalScroll =
          isVerticalScroll;
      });
    },
  },
});
