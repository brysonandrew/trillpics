import { useMemo } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import type { TOConfig } from "../types";

export const useBasicOscillator = ({
  context,
  ...options
}: TOConfig) => {
  const result = useMemo(() => {
    const create = () => {
      return {
        create,
        isStarted: false,
        oscillator: new OscillatorNode(
          context,
          options
        ),
      };
    };
    const ref = create();

    return {
      ...ref,
    };
  }, []);

  return result;
};
