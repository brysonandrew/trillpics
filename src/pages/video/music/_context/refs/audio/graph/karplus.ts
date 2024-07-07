import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";

export const GRAPH_KARPLUS: TGraphSource =
  {
    key: KARPLUS_KEY,
    nodes: [
      {
        key: "biquad" as const,
        options: {
          frequency: 800,
          Q: 1,
          detune: 0,
        },
      },
      // {
      //   key: "delay" as const,
      //   options: { delayTime: 0.1 },
      // },
    ],
    refs: {},
  };
