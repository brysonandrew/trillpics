import { resolveCompositeKey } from "@brysonandrew/utils-key";
import {
  TGraphNode,
  TGraphSource,
} from "~/pages/video/music/_context/refs/audio/graph/types";

export const appendIds = <
  T extends TGraphSource | TGraphNode
>(
  arr: T[]
) =>
  arr.map(
    (v, i) =>
      ({
        ...v,
        id: resolveCompositeKey(
          v.key,
          i
        ),
      } as T & { id: string })
  );
