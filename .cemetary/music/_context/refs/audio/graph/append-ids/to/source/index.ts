import { appendIdsAppendIndex } from "~/pages/video/music/_context/refs/audio/graph/append-ids/append-index";
import { appendIdsToSourceNodes } from "~/pages/video/music/_context/refs/audio/graph/append-ids/to/source/nodes";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";

export const appendIdsToSource = (
  source: TGraphSource,
  sourceIndex: number
) => {
  const sourceId = appendIdsAppendIndex(
    source.key,
    sourceIndex
  );
  const nodes = appendIdsToSourceNodes(
    sourceId,
    source.nodes
  );
  return {
    ...source,
    nodes,
    id: sourceId,
  };
};
