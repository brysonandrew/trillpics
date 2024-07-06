import { resolveTop } from "~/components/charts/grid/top";
import { TMidiValues } from "~/hooks/music/midis/types";
import { useGridDrill } from "~/hooks/grid/drill";
import { TGridsHandler } from "~/pages/video/music/_context/refs/grid/types";
import { box } from "~uno/rules/box";

export const useGridMidi = () => {
  const handleDrill =
    useGridDrill();

  const handler = (
    nextSteps: TMidiValues
  ) => {
    const handleGrid: TGridsHandler =
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
    return handleDrill(handleGrid);
  };

  return handler;
};
