import {
  TState,
  TStateWithPlayerState,
  TPartialState,
} from "~/store/types";
import { PersistOptions } from "zustand/middleware";
import { STORAGE_JSON } from "~/store/persist/json";
import {
  TPersistKey,
  TPersistState,
} from "~/store/persist/types";

export const PERSIST_STATE = {
  fps: "fps",
  durationInFrames: "durationInFrames",
  picsCount: "picsCount",
  picsEntries: "picsEntries",
  videoPics: "videoPics",
} as const;

const KEYS = Object.keys(
  PERSIST_STATE
) as TPersistKey[];

export const STORAGE: PersistOptions<
  TStateWithPlayerState,
  TPersistState
> = {
  name: "PERSIST_STORE_KEY",
  partialize: (
    state: TStateWithPlayerState
  ) =>
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
