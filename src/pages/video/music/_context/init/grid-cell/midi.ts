import { resolveTop } from "~/components/charts/grid/top";
import { TMidiValues } from "~/hooks/music/midis/types";
import { useGridCellDrill } from "~/pages/video/music/_context/init/grid-cell/drill";
import { TGridCellsHandler } from "~/pages/video/music/_context/init/grid-cell/types";
import { box } from "~uno/rules/box";

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

          cell.style.top = `${resolveTop(
            nextValue,
            box.m05
          )}`;
        }
      };
    return handleDrill(handleGridCell);
  };

  return handler;
};
