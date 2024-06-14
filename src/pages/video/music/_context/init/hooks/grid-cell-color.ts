import { useMusicInitContext } from "~/pages/video/music/_context/init";
import {
  TGridCells,
  TGridRows,
} from "~/pages/video/music/_context/init/types";
type TCellHandler = (
  cell: null | HTMLElement,
  index: number
) => void;
export const useGridCellHandler =
  () => {
    const { gridCellsRecord } =
      useMusicInitContext();
    const handle = (
      cellHandler: TCellHandler = (
        cell
      ) => {
        if (cell) {
          cell.className =
            "bg-white ring-0";
        }
      }
    ) => {
      const values = Object.values(
        gridCellsRecord
      );
      values.forEach(
        (rows: TGridRows) => {
          rows.forEach(
            (cells: TGridCells) => {
              cells.forEach(
                cellHandler
              );
            }
          );
        }
      );
    };
    return handle;
  };
