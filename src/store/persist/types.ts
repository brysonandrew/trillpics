import { TState } from "~/store/types";
import { PERSIST_STATE } from "~/store/persist/storage";

export type TPersistKey =
  keyof typeof PERSIST_STATE;

export type TPersistValue =
  TState[TPersistKey];
export type TPersistState = Record<
  TPersistKey,
  TPersistValue
>;
