import { TVideoState } from "@store/types";
import { createJSONStorage } from "zustand/middleware";
import localforage from "localforage";

export const STORAGE = {
  name: "PERSIST_STORE_KEY",
  storage:
    createJSONStorage<TVideoState>(
      () => localforage
    ),
};
