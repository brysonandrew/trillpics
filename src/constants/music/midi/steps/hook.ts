import {
  resolveMidiSteps,
  TMidiStepsConfig,
} from "~/constants/music/midi/steps";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const useMidiSteps = () => {
  // const { sequence, scale } =
  //   useTrillPicsStore(
  //     ({ sequence, scale }) => ({
  //       sequence,
  //       scale,
  //     })
  //   );
  const {
    schedule: {
      record: { scale, sequence },
    },
  } = useMusicRefs();
  const handler = (
    partial: Partial<TMidiStepsConfig>
  ) =>
    resolveMidiSteps({
      ...scale,
      ...sequence,
      ...partial,
    });

  return handler;
};
