import {
  SCALE_RECORD,
  TScaleKey,
} from "~/constants/scales";
import { handleRescale } from "~/hooks/music/midis/scale/rescale";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { useGridDrill } from "~/hooks/grid/drill";
import { useGridMidi } from "~/hooks/grid/midi";

export const useRescaleStatelessHandler =
  () => {
    const { schedule } =
      useMusicRefs();
    const handleNextSteps =
      useGridMidi();
    const handleGridCell =
      useGridDrill();

    const handler = (
      nextScaleKey: TScaleKey
    ) => {
      const scaleSteps =
        SCALE_RECORD[nextScaleKey];

      const currSteps =
        schedule.record.steps;

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
      return nextSteps
    };
    return handler;
  };
