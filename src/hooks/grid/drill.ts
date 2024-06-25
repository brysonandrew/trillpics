import { useMusicRefs } from "~/pages/video/music/_context/init";
import { gridStyleEmptyHandler } from "~/hooks/grid/style/empty";
import {
  TGridCells,
  TGridRows,
  TGridsHandler,
} from "~/pages/video/music/_context/init/refs/grid/types";

export const useGridDrill = () => {
  const { grid } = useMusicRefs();
  const handle = (
    cellHandler: TGridsHandler = gridStyleEmptyHandler
  ) => {
    const values = Object.values(
      grid.record
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
