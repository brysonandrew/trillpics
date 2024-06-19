import { useMemo } from "react";
import { useTrillPicsStore } from "~/store/middleware";
import type { TOConfig } from "../types";

export const useBasicOscillator = ({
  context,
  type,
  frequency,
  detune,
}: TOConfig) => {
  const result = useMemo(() => {
    const o =
      context.createOscillator();
    if (type) {
      o.type = type;
    }
    if (typeof frequency === "number") {
      o.frequency.value = frequency;
    }
    if (typeof detune === "number") {
      o.detune.value = detune;
    }
    return {
      oscillator: o,
      isStarted: false,
    };
  }, []);

  return result;
};
