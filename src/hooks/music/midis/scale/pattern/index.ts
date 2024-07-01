import { resolveMidiSteps } from "~/hooks/music/midis/steps";
import { TScalePattern } from "~/pages/video/music/synth/composition/scale/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useGridMidi } from "~/hooks/grid/midi";

export const useNodesPattern = () => {
  const { schedule} =
    useMusicRefs();
  const handleGridCellMidi =
    useGridMidi();

  const update = (
    value: TScalePattern
  ) => {
    const nextSteps = resolveMidiSteps({
      ...schedule.record.scale,
      ...schedule.record.sequence,
      pattern: value,
    });
    schedule.record.scale.pattern = value;
    schedule.record.steps = nextSteps;
    handleGridCellMidi(nextSteps);
  };

  return {
    value: schedule.record.scale.pattern,
    update,
  };
};
