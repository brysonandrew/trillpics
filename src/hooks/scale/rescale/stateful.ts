import {
  SCALE_RECORD,
  TScaleKey,
} from "~/constants/scales";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { handleRescale } from "~/hooks/scale/rescale";

export const useRescaleStatefulHandler =
  () => {
    const { schedule } =
      useMusicRefs();
    // const { set, steps } =
    //   useTrillPicsStore(
    //     ({ set, steps }) => ({
    //       set,
    //       steps,
    //     })
    //   );

    const handler = (
      value: TScaleKey
    ) => {
      schedule.update.key(value);
      //   set((draft: TState) => {
    

      //     draft.scale.key = value;
      //     // schedule.record.scale.lookup[
      //     //   draft.scale.key
      //     // ] = nextSteps;
      //     draft.steps = nextSteps;
      //   });
      // };
    };
    return handler;
  };
