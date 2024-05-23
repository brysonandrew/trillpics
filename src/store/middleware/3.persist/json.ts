import localForage from "localforage";
import { createJSONStorage } from "zustand/middleware";
import { TPersistPartializedState } from "~/store/middleware/3.persist/types";

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
  createJSONStorage<TPersistPartializedState>(
    () => localForage,
    JSON_STORAGE_OPTIONS
  );
