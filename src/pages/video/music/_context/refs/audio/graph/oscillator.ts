import { BIQUAD_KEY } from "~/pages/video/music/synth/nodes/biquad/constants";
import { DELAY_KEY } from "~/pages/video/music/synth/nodes/delay/constants";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { BITCRUSHER_KEY } from "~/pages/video/music/_context/refs/audio/bitcrusher";
import { GAINS_NODES } from "~/pages/video/music/_context/refs/audio/graph/gains";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { RING_MOD_KEY } from "~/pages/video/music/_context/refs/audio/ring-mod";

export const GRAPH_OSCILLATOR: TGraphSource =
  {
    key: OSCILLATOR_KEY,
    options: {
      type: "sawtooth" as const,
      frequency: 120,
    },
    nodes: [
    
      {
        key: BIQUAD_KEY,
        options: {
          frequency: 0.1,
          Q: 1,
          detune: 0,
        },
      },
      {
        key: DELAY_KEY,
        options: { delayTime: 0.1 },
      },

      ...GAINS_NODES,
      {
        key: BITCRUSHER_KEY,
        options: {
          frequency: 440,
          bits: 128,
        },
      },
      {
        key: RING_MOD_KEY,
        options: {
          rate: 0.1,
        },
      },
    ],
    refs: {},
  };
