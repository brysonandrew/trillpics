import { appendIds } from "~/pages/video/music/_context/refs/audio/graph/append-ids";
import { GRAPH_OSCILLATOR } from "~/pages/video/music/_context/refs/audio/graph/oscillator";
import { TAudioGraph } from "~/pages/video/music/_context/refs/audio/graph/types";

export const AUDIO_GRAPH: TAudioGraph =
  {
    sources: appendIds([
      GRAPH_OSCILLATOR,
      // GRAPH_KARPLUS,
      // GRAPH_NOISE,
    ]),
  } as const;
