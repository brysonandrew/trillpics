import { IconsWhiteNoise } from "~/components/icons/white-noise";
import { GAINS_NODES } from "~/pages/video/music/_context/refs/audio/graph/gains";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { WHITE_NOISE_KEY } from "~/pages/video/music/_context/refs/audio/noises";

export const GRAPH_NOISE: TGraphSource =
  {
    key: WHITE_NOISE_KEY,
    title: "white noise",
    Icon: IconsWhiteNoise,
    nodes: [...GAINS_NODES],
    refs: {},
  };
