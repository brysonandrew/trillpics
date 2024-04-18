import { initStoreState } from "@/store/state";
import { STORAGE } from "@/store/storage";
import { TPics, TVideoState } from "src/store/types";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import {
  create,
  Mutate,
  StateCreator,
  StoreApi,
  UseBoundStore,
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

export type TImmerState = StateCreator<
  TVideoState,
  [],
  TImmerStateMiddleware
>;
const createImmerState: TImmerState =
  immer<any>((...a) => ({
    ...initStoreState(...a),
  }));

const createPersistState: TPersistStateCreator =
  persist<
    any,
    [],
    TImmerStateMiddleware
  >(createImmerState, STORAGE);
type TStore = UseBoundStore<
  Mutate<
    StoreApi<TVideoState>,
    TStateMiddleware
  >
>;

export const useVideoStore: TStore =
  create<TVideoState, TStateMiddleware>(
    createPersistState
  );

  // useVideoStore.subscribe(
  //   (state) => state.videoPics,
  //   (videoPics: TPics) => {
  //     const durationInFrames = videoPics.length
  //     useEditorStore.setState({
  //       durationInFrames,
  //     });
  //   },
  //   {fireImmediately: true}
  // );
  