import {
  TPicsRow,
  TTableCalcConfig,
  TTableUpdateState,
} from "~/store/slices/table/types";
import {
  TState,
  TStateHandler,
} from "~/store/types";
import { APPROX_IMAGE_SIZE } from "~/constants/images";
import {
  TPic,
  TPics,
} from "~/store/slices/pics/types";
import { TScreen } from "~/context/screen/measure";
import precacheTable from "~app/precache.json";

const { length: tableCount } =
  precacheTable;

export const tableUpdateState: TStateHandler<
  TTableUpdateState
> = (set, get) => ({
  update: {
    dimensions: (screen: TScreen) => {
      if (screen.isDimensions) {
        get().table.update.calc({
          cells: get().pics(),
          ...screen,
        });
      }
    },
    count: (cells: TPics) => {
      const screen = get().screen;
      if (screen.isDimensions) {
        get().table.update.calc({
          cells,
          ...screen,
        });
      }
    },
    calc: ({
      cells,
      ...screen
    }: TTableCalcConfig) => {
      const columnsCount = Math.ceil(
        screen.width / APPROX_IMAGE_SIZE
      );
      const rowsCount = Math.ceil(
        tableCount / columnsCount
      );
      const rows: TPicsRow[] = [
        ...Array(rowsCount),
      ].map((_, ri) => {
        const columns: TPics = [
          ...Array(columnsCount),
        ].map((__, ci) => {
          const index =
            ri * columnsCount + ci;
          const item: TPic =
            cells[index] ??
            `${index + 1}`;

          return item;
        });

        return {
          columns,
        };
      });
      get().updateState(
        (draft: TState) => {
          const nextSize = Math.floor(
            screen.width / columnsCount
          );
          draft.table.size = nextSize;

          draft.table.isVerticalScroll =
            nextSize * rowsCount >
            screen.height;

          draft.table.rows = rows;

        }
      );
    },
  },
});
