import {
  SCALE_RECORD,
  TScaleKey,
} from "~/constants/scales";
import { handleRescale } from "~/hooks/music/midis/scale/rescale";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useGridCellDrill } from "~/pages/video/music/_context/init/grid-cell/drill";
import { useGridCellMidi } from "~/pages/video/music/_context/init/grid-cell/midi";

export const useRescaleStatelessHandler =
  () => {
    const { stepsRecord } =
      useContextMusicInit();
    const handleNextSteps =
      useGridCellMidi();
    const handleGridCell =
      useGridCellDrill();

    const handler = (
      nextScaleKey: TScaleKey
    ) => {
      const scaleSteps =
       SCALE_RECORD[nextScaleKey];

      const currSteps =
        stepsRecord.steps

      if (!currSteps) {
        console.log(
          "curr steps not defined"
        );
        return;
      }

      const nextSteps = handleRescale(
        currSteps,
        scaleSteps
      );
      handleNextSteps(nextSteps);
      handleGridCell();
    };
    return handler;
  };
