import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useMusicMidisPatternsOffset =
  () => {
    const { set } = useTrillPicsStore(
      ({ set }) => ({
        set,
      })
    );
    const left = () => {
      set((draft: TState) => {
        const next = [
          ...draft.synthSteps.slice(1),
          draft.synthSteps[0],
        ];
        draft.synthSteps = next;
      });
    };
    const right = () => {
      set((draft: TState) => {
        const lastIndex =
          draft.synthSteps.length - 1;
        const last =
          draft.synthSteps[lastIndex];
        const next = [
          last,
          ...draft.synthSteps,
        ].slice(0, lastIndex + 1);
        draft.synthSteps = next;
      });
    };
    return { left, right };
  };
