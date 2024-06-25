import { CHARTS_GRID_STEP_ACTIVE_STYLE } from "~/pages/video/music/_context/init/refs/grid/constants";
import { TGridsHandler } from "~/pages/video/music/_context/init/refs/grid/types";

export const gridStyleActiveHandler: TGridsHandler =
  (cell) => {
    if (cell) {
      cell.style.opacity =
        CHARTS_GRID_STEP_ACTIVE_STYLE.opacity;
      cell.style.transition =
        CHARTS_GRID_STEP_ACTIVE_STYLE.transitionDuration;
    }
  };
