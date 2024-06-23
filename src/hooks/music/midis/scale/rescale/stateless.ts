import {
  SCALE_RECORD,
  TScaleKey,
} from "~/constants/scales";
import { handleRescale } from "~/hooks/music/midis/scale/rescale";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useGridCellDrill } from "~/pages/video/music/_context/init/grid-cell/drill";

export const useRescaleStatelessHandler =
  () => {
    const { stepsRecord } =
      useContextMusicInit();

    const handleGridCell =
      useGridCellDrill();

    const handler = (
      nextScaleKey: TScaleKey
    ) => {
      const scaleSteps =
        stepsRecord.scale.lookup[
          nextScaleKey
        ] ?? SCALE_RECORD[nextScaleKey];

      const currSteps =
        stepsRecord.scale.lookup[
          stepsRecord.scale.curr
        ];

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
      handleGridCell()

    };
    return handler;
  };
