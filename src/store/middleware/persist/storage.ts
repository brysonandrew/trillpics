import { TState } from "~/store/types";
import { PersistOptions } from "zustand/middleware";
import { STORAGE_JSON } from "~/store/middleware/persist/json";
import {
  TPersistKey,
  TPersistState,
} from "~/store/middleware/persist/types";

export const PERSIST_STATE_RECORD = {
  fps: "fps",
  durationInFrames: "durationInFrames",
  picsCount: "picsCount",
  picsEntries: "picsEntries",
  videoPics: "videoPics"
} as const;

const KEYS = Object.keys(
  PERSIST_STATE_RECORD
) as TPersistKey[];

export const STORAGE: PersistOptions<
  TState,
  TPersistState
> = {
  name: "PERSIST_STORE_KEY",
  partialize: (state: TState) =>
    KEYS.reduce(
      (a, key: TPersistKey) => {
        return {
          ...a,
          [key]: state[key],
        };
      },
      {} as TPersistState
    ),
  storage: STORAGE_JSON,
};
