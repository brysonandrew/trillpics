import { SCALE_RECORD, TScaleKey } from "~/constants/scales";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { handleRescale } from "~/hooks/music/midis/scale/rescale";

export const useRescaleStatefulHandler =
  () => {
    const { stepsRecord } =
      useContextMusicInit();
    const { set, steps } =
      useTrillPicsStore(
        ({ set, steps }) => ({
          set,
          steps,
        })
      );

    const handler = (
      value: TScaleKey
    ) => {
      set((draft: TState) => {
        const scaleSteps =
          SCALE_RECORD[value];

        const nextSteps = handleRescale(
          steps,
          scaleSteps
        );

        draft.scale.key = value;
        // stepsRecord.scale.lookup[
        //   draft.scale.key
        // ] = nextSteps;
        draft.steps = nextSteps;
      });
    };

    return handler;
  };
