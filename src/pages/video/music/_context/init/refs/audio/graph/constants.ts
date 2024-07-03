import {
  TAudioGraph,
  TGraphAudioNode,
  TGraphSourceAudioNode,
} from "~/pages/video/music/_context/init/refs/audio/graph/types";

const AUDIO_GRAPH_REFS: Record<
  string,
  | TGraphAudioNode
  | TGraphSourceAudioNode
> = {};

// TGraphRefs = {
// filter: {},
// oscillator: {},
// delay: {},
// strings: {},
// };
export const AUDIO_GRAPH: TAudioGraph =
  {
    sources: [
      {
        key: "oscillator",
        options: { type: "sawtooth" as const },
        nodes: [
          {
            key: "delay" as const,
            options: { delayTime: 0.1 },
          },
        ],
      },
    ],
    refs: AUDIO_GRAPH_REFS,
    ref: { current: null },
  } as const;
