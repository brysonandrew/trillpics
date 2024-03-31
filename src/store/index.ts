import { initStoreState } from "@store/state";
import { STORAGE } from "@store/storage";
import { TVideoState } from "src/store/types";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  create,
  Mutate,
  StateCreator,
  StoreApi,
  UseBoundStore,
  useStore,
} from "zustand";

type TImmerStateMiddleware = [
  ["zustand/immer", never]
];

type TPersistStateMiddleware = [
  ["zustand/persist", unknown]
];

type TStateMiddleware = [
  ...TPersistStateMiddleware,
  ...TImmerStateMiddleware
];

type TPersistStateCreator =
  StateCreator<
    TVideoState,
    [],
    TStateMiddleware
  >;

const createImmerState: StateCreator<
  TVideoState,
  [],
  TImmerStateMiddleware
> = immer<TVideoState>((...a) => ({
  ...initStoreState(...a),
  updateState: a[0],
}));

const createPersistState: TPersistStateCreator =
  persist<
    TVideoState,
    [],
    TImmerStateMiddleware
  >(createImmerState, STORAGE);
type TStore = UseBoundStore<
  Mutate<
    StoreApi<TVideoState>,
    TStateMiddleware
  >
>;
export const useVideoStore: TStore = create<
  TVideoState,
  TStateMiddleware
>(createPersistState);

// export const useVideoStore: TVideoState =
//   useStore<TStore>(store);
