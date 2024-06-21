import {
  resolveMidiSteps,
  TMidiStepsConfig,
} from "~/constants/music/midi/steps";
import { useTrillPicsStore } from "~/store/middleware";

export const useMidiSteps = () => {
  const { sequence, scale } =
    useTrillPicsStore(
      ({ sequence, scale }) => ({
        sequence,
        scale,
      })
    );
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
