import { IconsGuitar } from "~/components/icons/guitar";
import { KARPLUS_KEY } from "~/pages/video/music/synth/nodes/karplus/constants";
import { AUDIO_GRAPH_BIQUAD } from "~/pages/video/music/_context/refs/audio/graph/biquads";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";

export const GRAPH_KARPLUS: TGraphSource =
  {
    key: KARPLUS_KEY,
    Icon: IconsGuitar,
    title: "strings",
    nodes: [AUDIO_GRAPH_BIQUAD],
    refs: {},
  };
