import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { appendIds } from "~/pages/video/music/_context/refs/audio/graph/append-ids";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";

export const GRAPH_OSCILLATOR = {
  key: OSCILLATOR_KEY,
  options: {
    type: "sawtooth" as const,
    frequency: 120,
  },
  nodes: appendIds([
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
    {
      key: "bitcrusher" as const,
      options: {
        frequency: 440,
        bits: 128,
      },
    },
  ]),
  refs: {},
} as const satisfies TGraphSource;
