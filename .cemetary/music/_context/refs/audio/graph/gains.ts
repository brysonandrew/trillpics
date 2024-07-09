import { IconsGain } from "~/components/icons/gain";
import { TGraphNode } from "~/pages/video/music/_context/refs/audio/graph/types";

export const GAINS_NODES: TGraphNode[] =
  [
    {
      key: "gains.midis.preamp" as const,
      title: "preamp",
      Icon: IconsGain,
      options: {
        gain: 0.5,
      },
    },
    {
      key: "gains.midis.master" as const,
      title: "master",
      Icon: IconsGain,
      options: {
        gain: 0.5,
      },
    },
  ];
