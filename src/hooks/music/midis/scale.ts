import {
  SCALE_RECORD,
  SCALE_VALUE_COUNT,
  TScaleKey,
} from "~/constants/scales";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { DEFAULT_SCALE_KEY } from "~/pages/video/music/_context/init/constants";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useMidisScale = () => {
  const { stepsScaleRecord } =
    useMusicInitContext();
  const { set, scale, steps } =
    useTrillPicsStore(
      ({ set, scale, steps }) => ({
        set,
        scale,
        steps,
      })
    );
  const rescale = (
    value: TScaleKey
  ) => {
    set((draft: TState) => {
      draft.scale.key = value;
      const scaleSteps =
        SCALE_RECORD[value];
      const nextSteps = steps.map(
        (value) => {
          if (value === null)
            return null;

          const resolveIndex = (
            offset = 0
          ) =>
            scaleSteps.findIndex(
              (step) =>
                step ===
                (value + offset) %
                  SCALE_VALUE_COUNT
            );

          let offset = 0;
          const inc = 1;

          let next: number =
            resolveIndex();
          let max = 0;
          while (
            next < 0 &&
            max < 100
          ) {
            console.log(
              "offset - ",
              offset
            );
            const resultIndex =
              resolveIndex(offset);
            if (resultIndex > -1) {
              next =
                scaleSteps[resultIndex];
              break;
            }
            if (offset >= 0) {
              offset++;
            }
            offset *= inc;
            max++;
          }
          console.log(
            `from ${value} -> to ${next}`
          );
          return next;
        }
      );
      stepsScaleRecord[
        draft.scale.key
      ] = nextSteps;
      draft.steps = nextSteps;
    });
  };

  return {
    key: scale.key,
    update: rescale,
    rescale,
  };
};
