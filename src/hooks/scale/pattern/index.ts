import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { TScalePattern } from "~/pages/video/music/synth/composition/scale/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useGridMidi } from "~/hooks/grid/midi";

export const useNodesPattern = () => {
  const { schedule} =
    useMusicRefs();

  // const playinKeysRef =
  //   useTransientPlayingKeys();
  // const { set, scale } =
  //   useTrillPicsStore(
  //     ({ set, scale }) => ({
  //       set,
  //       scale,
  //     })
  //   );
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

    // if (
    //   !playinKeysRef.current.includes(
    //     "midis"
    //   )
    // ) {
    //   draft.scale.pattern = value;
    //   draft.steps = nextSteps;
    // }
    handleGridCellMidi(nextSteps);
  };

  return {
    value: schedule.record.scale.pattern,
    update,
  };
};
