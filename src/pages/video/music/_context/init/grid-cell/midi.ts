import { TMidiValues } from "~/hooks/music/midis/types";
import { useGridCellDrill } from "~/pages/video/music/_context/init/grid-cell/drill";
import { TGridCellsHandler } from "~/pages/video/music/_context/init/grid-cell/types";

export const useGridCellMidi = () => {
  const handleDrill =
    useGridCellDrill();

  const handler = (
    nextSteps: TMidiValues
  ) => {
    const handleGridCell: TGridCellsHandler =
      (cell, stepIndex, arr) => {
        if (
          cell &&
          cell.dataset.progress ===
            "midis"
        ) {
          const nextValue =
            nextSteps[stepIndex];
          const prevValue =
            arr[stepIndex];

          cell.dataset.midi = `${nextValue}`;
        }
      };
    return handleDrill(handleGridCell);
  };

  return handler;
};
