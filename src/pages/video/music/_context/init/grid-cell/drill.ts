import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { gridCellStyleEmptyHandler } from "~/pages/video/music/_context/init/grid-cell/style/empty";
import { TGridCellsHandler } from "~/pages/video/music/_context/init/grid-cell/types";
import { TGridCells, TGridRows } from "~/pages/video/music/_context/init/types";

export const useGridCellDrill = () => {
  const { gridCellsRecord } =
    useContextMusicInit();
  const handle = (
    cellHandler: TGridCellsHandler = gridCellStyleEmptyHandler
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
