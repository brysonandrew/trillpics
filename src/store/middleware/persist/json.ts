import localForage from "localforage";
import { createJSONStorage } from "zustand/middleware";
import { TPersistState } from "~/store/middleware/persist/types";

// export type TMapValue =
//   | TTrack
//   | TTimelineRow;
// export type TMapEntry = [
//   string,
//   unknown
// ];
// export type TMapEntries = TMapEntry[];

// export type TStorageKey =
//   keyof TState;

export type TStorageHandler<T = any> = (
  key: string,
  value: T
) => T;
type JsonStorageOptions = {
  reviver?: TStorageHandler;
  replacer?: TStorageHandler;
};

const JSON_STORAGE_OPTIONS: JsonStorageOptions =
  {
    reviver: (...args) => {
      const [key, value] = args;
      return value;
    },
    replacer: (...args) => {
      const [key, value] = args;
      return value;
    },
  };

export const STORAGE_JSON =
  createJSONStorage<TPersistState>(
    () => localForage,
    JSON_STORAGE_OPTIONS
  );
