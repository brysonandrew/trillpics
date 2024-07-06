import { WORKLETS } from "~/constants/music/worklets";
import { TLoadWorklets } from "~/pages/video/music/_context/load/worklets/types";
import { TWorkletKey } from "~/types/worklets";

export const LOAD_WORKLETS = WORKLETS.reduce(
  (a, key: TWorkletKey) => ({
    [key]: null,
    ...a,
  }),
  {} as TLoadWorklets
);