import { appendIds } from "~/pages/video/music/_context/refs/audio/graph/append-ids";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";

export const GRAPH_NOISE = {
  key: WHITE_NOISE_KEY,
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
