import { CHARTS_GRID_STEP_EMPTY_STYLE } from "~/components/charts/grid/step";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import {
  TGridCells,
  TGridRows,
  TProgressKey,
} from "~/pages/video/music/_context/init/types";
type TCellHandler = (
  cell: null | HTMLElement,
  index: number,
  arr: (null | HTMLElement)[]
) => void;
export const defaultGridCellHandler: TCellHandler =
  (cell) => {
    if (cell) {
      cell.style.opacity =
        CHARTS_GRID_STEP_EMPTY_STYLE.opacity;
      cell.style.transition =
        CHARTS_GRID_STEP_EMPTY_STYLE.transitionDuration;
    }
  };
export const useGridCellHandler =
  () => {
    const { gridCellsRecord } =
      useMusicInitContext();
    const handle = (
      cellHandler: TCellHandler = defaultGridCellHandler
    ) => {
      const values = Object.values(
        gridCellsRecord
      );
      values.forEach(
        (rows: TGridRows) => {
          rows.forEach(
            (cells: TGridCells) => {
              Object.values(
                cells
              ).forEach(cellHandler);
            }
          );
        }
      );
    };
    return handle;
  };
