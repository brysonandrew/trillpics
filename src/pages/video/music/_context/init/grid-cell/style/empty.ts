import { CHARTS_GRID_STEP_EMPTY_STYLE } from "~/pages/video/music/_context/init/grid-cell/constants";
import { TGridCellsHandler } from "~/pages/video/music/_context/init/grid-cell/types";

export const gridCellStyleEmptyHandler: TGridCellsHandler =
  (cell) => {
    if (cell) {
      cell.style.opacity =
        CHARTS_GRID_STEP_EMPTY_STYLE.opacity;
      cell.style.transition =
        CHARTS_GRID_STEP_EMPTY_STYLE.transitionDuration;
    }
  };
