import { IconsTimer } from "~/components/icons/delay";
import { IconsOscillator } from "~/components/icons/oscillator";
import { IconsRingMod } from "~/components/icons/ring-mod";
import { DELAY_KEY } from "~/pages/video/music/synth/nodes/delay/constants";
import { OSCILLATOR_KEY } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { AUDIO_GRAPH_BIQUAD } from "~/pages/video/music/_context/refs/audio/graph/biquads";
import { AUDIO_GRAPH_BITCRUSHER } from "~/pages/video/music/_context/refs/audio/graph/bitcrushers";
import { GAINS_NODES } from "~/pages/video/music/_context/refs/audio/graph/gains";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { RING_MOD_KEY } from "~/pages/video/music/_context/refs/audio/ring-mod";

export const GRAPH_OSCILLATOR: TGraphSource =
  {
    key: OSCILLATOR_KEY,
    Icon: IconsOscillator,
    title: "oscillator",
    options: {
      type: "sawtooth" as const,
      frequency: 120,
    },
    nodes: [
      AUDIO_GRAPH_BIQUAD,
      {
        key: DELAY_KEY,
        Icon: IconsTimer,
        title: "delay",
        options: { delayTime: 0.1 },
      },
      ...GAINS_NODES,
      // AUDIO_GRAPH_BITCRUSHER,
      // {
      //   key: RING_MOD_KEY,
      //   Icon: IconsRingMod,
      //   title: "ring mod",
      //   options: {
      //     rate: 0.1,
      //   },
      // },
    ],
    refs: {},
  };
