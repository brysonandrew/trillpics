import { IconsBiquad } from "~/components/icons/biquad";
import { BIQUAD_KEY } from "~/pages/video/music/synth/nodes/biquad/constants";
import { TGraphNode } from "~/pages/video/music/_context/refs/audio/graph/types";

export const AUDIO_GRAPH_BIQUAD: TGraphNode =
  {
    key: BIQUAD_KEY,
    Icon: IconsBiquad,
    title: "filter",
    options: {
      frequency: 0.1,
      Q: 1,
      detune: 0,
    },
  };
