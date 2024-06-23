import { TState } from "~/store/types";
import { PersistOptions } from "zustand/middleware";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import { resolveMidiSteps } from "~/constants/music/midi/steps";
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
  steps: "steps",
  pics: "pics",
  synth: "synth",
  sequence: "sequence",
  scale: "scale",
  isLoop: "isLoop",
  beats: "beats",
  bpm: "bpm",
} as const satisfies Partial<
  Record<keyof TState, keyof TState>
>;

const KEYS = Object.keys(
  PERSIST_STATE_RECORD
) as TPersistKey[];

export const PERSIST_STORAGE: PersistOptions<
  TState,
  TPersistPartializedState
> = {
  name: persistKey,
  partialize: (state: TState) => {
    const persisted = KEYS.reduce(
      (a, key: TPersistKey) => {
        const value = state[key];
        return {
          ...a,
          [key]: value,
        };
      },
      {} as TPersistPartializedState
    );
    return {
      ...persisted,
      steps: resolveMidiSteps({
        ...persisted.scale,
        ...persisted.sequence,
      }),
    };
  },
  storage: STORAGE_JSON,
};
