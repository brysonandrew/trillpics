import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";

export const GRAPH_KARPLUS = {
  key: KARPLUS_KEY,
  options: {
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
  ref: { current: null },
};
