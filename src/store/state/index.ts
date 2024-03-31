import { TVideoState } from "src/store/types";
import { StateCreator } from "zustand";

import inits from "@app/precache.json";
import { shuffle } from "@utils/array/shuffle";
const shuffledInits = shuffle(inits);

export const initStoreState: StateCreator<
  TVideoState,
  [],
  [],
  TVideoState
> = (set, get) => ({
  picsEntries: [shuffledInits],
  countPicsEntries: () =>
    get().picsEntries.length,
  pics: (from = 0) =>
    get().picsEntries[
      get().countPicsEntries() - ++from
    ],
  countPics: () =>
    get().pics().length,
  updatePicsEntries: (
    next?: string[]
  ) => {
    const currPics = get().pics();
    set({
      picsEntries: [
        ...get().picsEntries,
        next ?? shuffle([...currPics]),
      ],
    });
  },
  videoPics: [],
  isVideoMode: false,
  isPreviewOpen: false,
  togglePreview: (next?: boolean) => {
    set((prev: TVideoState) => ({
      isPreviewOpen:
        next ?? !prev.isPreviewOpen,
    }));
  },
  toggleVideoMode: (next?: boolean) => {
    set((prev: TVideoState) => {
      const isVideoMode =
        next ?? !prev.isVideoMode;
      return {
        isVideoMode,
        isPreviewOpen: false,
      };
    });
  },
  addVideo: (next: string) =>
    set((prev: TVideoState) => ({
      videoPics: [
        ...new Set([
          ...prev.videoPics,
          next,
        ]),
      ],
    })),
  removeVideo: (next: string) =>
    set((prev: TVideoState) => ({
      videoPics: [
        ...new Set([
          ...prev.videoPics.filter(
            (v) => v !== next
          ),
        ]),
      ],
    })),
});
