import localForage from "localforage";
import { createJSONStorage } from "zustand/middleware";
import { TPersistPartializedState } from "~/store/middleware/3.persist/types";

export const STORAGE_JSON =
  createJSONStorage<TPersistPartializedState>(
    () => localForage
  );
