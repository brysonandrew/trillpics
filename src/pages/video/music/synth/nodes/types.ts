import { GRAPH_LAYOUT_KEYS } from "~/pages/video/music/synth/nodes/constants";
import {
  TGraphNode,
  TGraphSource,
} from "~/pages/video/music/_context/refs/audio/graph/types";

export type TSourceProps = {
  source: TGraphSource;
};

export type TSourceNodesProps =
  TSourceProps & {
    node: TGraphNode;
    index: number;
  };

export type TNodesOptions<
  T extends string
> = Partial<Record<T, number>>;

export type TGraphLayoutKey =
  (typeof GRAPH_LAYOUT_KEYS)[number];
