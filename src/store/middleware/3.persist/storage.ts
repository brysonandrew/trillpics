import { TState } from "~/store/types";
import { PersistOptions } from "zustand/middleware";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { STORAGE_JSON } from "~/store/middleware/3.persist/json";
import {
  TPersistKey,
  TPersistPartializedState,
} from "~/store/middleware/3.persist/types";
import packageJson from "~root/package.json";
const version = packageJson.version;
const name = packageJson.name;

const persistKey = resolveCompositeKey(
  version,
  name,
  "temporal",
  "persist"
);

export const PERSIST_STATE_RECORD = {
  picsCount: "picsCount",
  pics: "pics"
} as const;

const KEYS = Object.keys(
  PERSIST_STATE_RECORD
) as TPersistKey[];

export const PERSIST_STORAGE: PersistOptions<
  TState,
  TPersistPartializedState
> = {
  name: persistKey,
  partialize: (state: TState) =>
    KEYS.reduce(
      (a, key: TPersistKey) => {
        const value = state[key];
        console.log(value)
        return {
          ...a,
          [key]: value,
        };
      },
      {} as TPersistPartializedState
    ),
  storage: STORAGE_JSON,
};
