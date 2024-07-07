import { TGraphNode } from "~/pages/video/music/_context/refs/audio/graph/types";

export const GAINS_NODES: TGraphNode[] =
  [
    {
      key: "gains.midis.preamp" as const,
      options: {
        gain: 0.5,
      },
    },
    {
      key: "gains.midis.master" as const,
      options: {
        gain: 0.5,
      },
    },
  ];
