import { appendIdsToSource } from "~/pages/video/music/_context/refs/audio/graph/append-ids/to/source";
import { TGraphSource } from "~/pages/video/music/_context/refs/audio/graph/types";

export const appendIdsTo = (
  arr: TGraphSource[]
) => arr.map(appendIdsToSource);
