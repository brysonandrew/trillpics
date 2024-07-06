import { TGraphNode, TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";
import { TDivMutableRef } from "~/types/elements";

export type TSourceProps = {
  containerRef: TDivMutableRef;
  source:TGraphSource
};

export type TSourceNodesProps = TSourceProps&{
  node: TGraphNode;
  index:number;
};


export type TNodesOptions<
  T extends string
> = Partial<Record<T, number>>;
