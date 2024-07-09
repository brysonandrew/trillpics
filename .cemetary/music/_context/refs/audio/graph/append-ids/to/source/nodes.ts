import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { appendIdsAppendIndex } from "~/pages/video/music/_context/refs/audio/graph/append-ids/append-index";
import { TGraphNode } from "~/pages/video/music/_context/refs/audio/graph/types";

export const appendIdsToSourceNodes = (
  sourceId: string,
  nodes: TGraphNode[],
) => {
  return nodes.map(
    (node, nodeIndex) => {
      const nodeId =
        appendIdsAppendIndex(
          node.key,
          nodeIndex
        );
      const id = resolveCompositeKey(
        sourceId,
        nodeId
      );
      return {
        ...node,
        id,
      };
    }
  );
};
