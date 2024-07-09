import { TAllParamsKey } from "~/pages/video/music/types";
import { TGraphRefKey } from "~/pages/video/music/_context/refs/audio/graph/types";

export type TDefaultsPredefinedKeys = {
  graphKey: TGraphRefKey|string,
  paramKey: TAllParamsKey
}