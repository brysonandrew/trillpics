import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { useTransientPlayingKeys } from "~/hooks/music/play/transient";
import { TScalePattern } from "~/pages/video/music/synth/scale/types";
import { useGridCellMidi } from "~/pages/video/music/_context/init/grid-cell/midi";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const useNodesPattern = () => {
  const playinKeysRef =
    useTransientPlayingKeys();
  const { set, scale } =
    useTrillPicsStore(
      ({ set, scale }) => ({
        set,
        scale,
      })
    );
  const handleGridCellMidi =
    useGridCellMidi();

  const update = (
    value: TScalePattern
  ) => {
    set((draft: TState) => {
      const nextSteps =
        resolveMidiSteps({
          ...draft.scale,
          ...draft.sequence,
          pattern: value,
        });
      if (
        !playinKeysRef.current.includes(
          "midis"
        )
      ) {
        draft.scale.pattern = value;
        draft.steps = nextSteps;
      }
      handleGridCellMidi(nextSteps);
    });
  };

  return {
    value: scale.pattern,
    update,
  };
};
