import {
  TVideoState
} from "@store/types";
import { createJSONStorage } from "zustand/middleware";

export const STORAGE = {
  name: "PERSIST_STORE_KEY",
  storage:
    createJSONStorage<TVideoState>(
      () => sessionStorage
    ),
};
