import { GRAPH_LAYOUT_KEYS } from "~/pages/video/music/synth/nodes/constants";
import {
  TGraphNodeWithId,
  TGraphSourceWithId,
} from "~/pages/video/music/_context/refs/audio/graph/types";

export type TSourceProps = {
  source: TGraphSourceWithId;
};

export type TSourceNodesProps = TSourceProps & {
  node: TGraphNodeWithId;
  index: number;
};

export type TNodesOptions<
  T extends string
> = Partial<Record<T, number>>;

export type TGraphLayoutKey =
  (typeof GRAPH_LAYOUT_KEYS)[number];
