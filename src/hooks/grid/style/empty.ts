import { CHARTS_GRID_STEP_EMPTY_STYLE } from "~/pages/video/music/_context/init/refs/grid/constants";
import { TGridsHandler } from "~/pages/video/music/_context/init/refs/grid/types";

export const gridStyleEmptyHandler: TGridsHandler =
  (cell) => {
    if (cell) {
      cell.style.opacity =
        CHARTS_GRID_STEP_EMPTY_STYLE.opacity;
      cell.style.transition =
        CHARTS_GRID_STEP_EMPTY_STYLE.transitionDuration;
    }
  };
