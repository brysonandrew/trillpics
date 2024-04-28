import { TState } from "~/store/types";
import { PERSIST_STATE_RECORD } from "~/store/middleware/persist/storage";

export type TPersistKey =
  keyof typeof PERSIST_STATE_RECORD;

export type TPersistState = Pick<
  TState,
  TPersistKey
>;

export type TPersistValue =
  TState[TPersistKey];
export type TPersistRecord = Record<
  TPersistKey,
  TPersistValue
>;
export type TPersistInitMiddleware = [
  "zustand/persist",
  TPersistState
];

export type TPersistMiddleware = [
  "zustand/persist",
  TPersistState
];
