import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { GRAPH_KARPLUS } from "~/pages/video/music/_context/refs/audio/graph/karplus";
import { GRAPH_OSCILLATOR } from "~/pages/video/music/_context/refs/audio/graph/oscillator";
import {
  TAudioGraph,
  TGraphRefs,
} from "~/pages/video/music/_context/refs/audio/graph/types";
import { GRAPH_NOISE } from "~/pages/video/music/_context/refs/audio/graph/white-noise";

const AUDIO_GRAPH_REFS: Partial<TGraphRefs> =
  {
    // oscillator: null,
    // "karplus-strong": null,
    // "pink-noise": null,
    // "white-noise": null,
    // bitcrusher: null,
    // biquad: null,
    // delay:null
  };

// TGraphRefs = {
// filter: {},
// oscillator: {},
// delay: {},
// strings: {},
// };
export const AUDIO_GRAPH = {
  sources: [
    // GRAPH_OSCILLATOR,
    GRAPH_KARPLUS,
    // GRAPH_NOISE,
  ],
  ref: { current: null },
} as const;
