import { resolveState } from "@store/resolve-state";
import { STORAGE } from "@store/storage";
import {
  TMiddlewareParam,
  TStateCreator,
  TVideoState,
} from "src/store/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const persistState: TStateCreator<TVideoState> =
  persist<TVideoState>(
    resolveState,
    STORAGE
  );

export const useVideoStore = create<
  TVideoState,
  TMiddlewareParam
>(persistState);
