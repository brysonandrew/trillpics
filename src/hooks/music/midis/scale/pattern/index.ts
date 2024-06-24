import { resolveMidiSteps } from "~/constants/music/midi/steps";
import { TScalePattern } from "~/pages/video/music/synth/scale/types";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useGridCellMidi } from "~/pages/video/music/_context/init/grid-cell/midi";

export const useNodesPattern = () => {
  const { stepsRecord } =
    useContextMusicInit();

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
    useGridCellMidi();

  const update = (
    value: TScalePattern
  ) => {
    const nextSteps = resolveMidiSteps({
      ...stepsRecord.scale,
      ...stepsRecord.sequence,
      pattern: value,
    });
    stepsRecord.scale.pattern = value;
    stepsRecord.steps = nextSteps;

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
    value: stepsRecord.scale.pattern,
    update,
  };
};
