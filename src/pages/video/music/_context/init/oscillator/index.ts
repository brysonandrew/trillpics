import { useMemo } from "react";
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
    ) => {
      return {
        type: node.type,
        frequence: node.frequency.value,
        detune: node.detune.value,
      };
    };

    const options = {
      type: "sawtooth" as const,
      frequency: 120,
    };
    const oscillator: TOscillator = {
      create,
      isStarted: false,
      prevHz: options.frequency,
      node: create(options),
      recycle,
    };
    return oscillator;
  }, []);

  return ref;
};
