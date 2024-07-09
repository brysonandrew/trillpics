import {
  resolveMidiSteps,
  TMidiStepsConfig,
} from "~/hooks/music/midis/steps";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

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
