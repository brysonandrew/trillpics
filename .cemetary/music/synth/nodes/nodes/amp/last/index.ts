import { TGraphNode } from "~/pages/video/music/_context/refs/audio/graph/types";
import { isGainNode } from "~/utils/music/validation";
import { isDefined } from "~/utils/validation/is/defined";

export const ampLast = (
  nodes: TGraphNode[],
  initIndex = nodes.length-1,
) => {
  let prevIndex = initIndex;
  let last = null;
  while (prevIndex > 0) {
    prevIndex--;
    const prev = nodes[prevIndex];
    if (
      isDefined(prev) &&
      "amp" in prev &&
      isGainNode(prev.amp)
    ) {
      last = prev.amp;
      console.log("LAST FOUND ",  prevIndex,prev,  )
      break;
    }
  }

  return last;
};
