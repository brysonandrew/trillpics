import { IconsBitcrusher } from "~/components/icons/bitcrusher";
import { BITCRUSHER_KEY } from "~/pages/video/music/_context/refs/audio/bitcrusher";
import { TGraphNode } from "~/pages/video/music/_context/refs/audio/graph/types";

export const AUDIO_GRAPH_BITCRUSHER: TGraphNode =
  {
    key: BITCRUSHER_KEY,
    Icon: IconsBitcrusher,
    title: "bitcrusher",
    options: {
      frequency: 440,
      bits: 128,
    },
  };
