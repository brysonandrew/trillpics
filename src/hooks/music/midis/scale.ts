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
  const { set, synth } =
    useTrillPicsStore(
      ({ set, synth }) => ({
        set,
        synth,
      })
    );
  const rescale = () => {
    set((draft: TState) => {
      const scaleSteps =
        stepsScaleRecord[
          DEFAULT_SCALE_KEY
        ] ??
        stepsScaleRecord[
          draft.synth.melody.scale.key
        ] ??
        [];
      const nextSteps = scaleSteps.map(
        (value, valueIndex) => {
          if (value === null)
            return null;

          const scaleSteps =
            SCALE_RECORD[
              draft.synth.melody.scale
                .key
            ];

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
          // valueIndex % 2 === 0
          //   ? 1
          //   : -1;

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
        draft.synth.melody.scale.key
      ] = nextSteps;
      draft.synth.steps = nextSteps;
    });
  };
  const update = (value: TScaleKey) => {
    set((draft: TState) => {
      draft.synth.melody.scale.key =
        value;
    });
  };

  return {
    key: synth.melody.scale.key,
    update,
    rescale,
  };
};
