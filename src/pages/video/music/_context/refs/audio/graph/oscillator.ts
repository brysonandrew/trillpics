import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";

export const GRAPH_OSCILLATOR = {
  key: OSCILLATOR_KEY,
  options: {
    type: "sawtooth" as const,
    frequency: 120,
  },
  nodes: [
    {
      key: "biquad" as const,
      options: {
        frequency: 0.1,
        Q: 1,
        detune: 0,
      },
    },
    {
      key: "delay" as const,
      options: { delayTime: 0.1 },
    },
  ],
  refs: {},
  amps: [],
  // ref: { current: null },
};
