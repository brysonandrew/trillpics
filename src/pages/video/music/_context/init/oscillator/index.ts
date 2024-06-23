import { useMemo } from "react";
import { OSCILLATOR_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/hooks/constants";
import { TOscillator } from "~/pages/video/music/_context/init/oscillator/types";

export const useOscillator = (
  context: AudioContext
) => {
  const ref = useMemo(() => {
    const create = (
      options: OscillatorOptions
    ) =>
      new OscillatorNode(
        context,
        options
      );
    const recycle = (
      node: OscillatorNode
    ) =>
      OSCILLATOR_OPTIONS.reduce(
        (a, key) => ({
          ...a,
          [key]: node[key].value,
        }),
        {} as OscillatorOptions
      );
    const options = {
      type: "sawtooth" as const,
      frequency: 120,
    };
    const oscillator: TOscillator = {
      create,
      isStarted: false,
      prevHz:options.frequency,
      node: create(options),
      recycle,
    };
    return oscillator;
  }, []);

  return ref;
};
