import { appendIdsTo } from "~/pages/video/music/_context/refs/audio/graph/append-ids/to";
import { GRAPH_OSCILLATOR } from "~/pages/video/music/_context/refs/audio/graph/oscillator";
import { TAudioGraph } from "~/pages/video/music/_context/refs/audio/graph/types";
import { GRAPH_NOISE } from "~/pages/video/music/_context/refs/audio/graph/white-noise";

export const AUDIO_GRAPH: TAudioGraph =
  {
    sources: appendIdsTo([
      GRAPH_OSCILLATOR,
      // GRAPH_KARPLUS,
      // GRAPH_NOISE,
    ]),
  } as const;
