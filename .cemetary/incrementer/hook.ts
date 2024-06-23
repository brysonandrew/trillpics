import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { useTrillPicsStore } from "~/store/middleware";
import { TSequenceOptions } from "~/store/state/music/types";
import { TState } from "~/store/types";

export const useMidisSequenceIncrementer =
  (
    key: keyof Omit<
      TSequenceOptions,
      "beats"
    >,
    min?: number,
    max?: number
  ) => {
    const { set } = useTrillPicsStore(
      ({ set }) => ({
        set,
      })
    );
    const increment = (
      value: number
    ) => {
      set((draft: TState) => {
        const nextValue =
          draft.sequence[key] + value;
        if (
          nextValue >
            (max ??
              draft.steps.length) ||
          nextValue < (min ?? 0)
        )
          return;

        const next = resolveMidiSteps({
          ...draft.sequence,
          ...draft.scale,
          [key]: nextValue,
        });
        draft.sequence[key] = nextValue;
        draft.steps = next;
      });
    };
    const down = () => {
      increment(-1);
    };
    const up = () => {
      increment(1);
    };
    return { down, up };
  };
