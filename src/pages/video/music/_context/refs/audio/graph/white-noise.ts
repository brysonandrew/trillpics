import { WHITE_NOISE } from "~/pages/video/music/_context/refs/audio/noises";

export const GRAPH_NOISE = {
        key: WHITE_NOISE,
        // options: {
        //   type: "gain" as const,
        //   frequency: 0.5,
        // },
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
      }