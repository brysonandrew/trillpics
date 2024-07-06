import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { appendIds } from "~/pages/video/music/_context/refs/audio/graph/append-ids";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";

export const GRAPH_KARPLUS = {
  key: KARPLUS_KEY,
  options: {
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
  ]),
  refs: {},
} as const satisfies TGraphSource;
