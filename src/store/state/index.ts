import { TVideoState } from "src/store/types";
import { StateCreator } from "zustand";
import { shuffle } from "@utils/array/shuffle";
import { TImmerState } from "@/store";

import precachePics from "@app/precache.json";
import { DEFAULT_FPS } from "@/remotion/constants";
const { length: picsCount } =
  precachePics;
const inits = [...Array(picsCount)].map(
  (_, index) => `${++index}`
);
const shuffledInits = shuffle(inits);

export const initStoreState: TImmerState =
  (set, get) => ({
    fps: DEFAULT_FPS,
    isPlaying:false,
    playerElement: null,
    picsCount,
    picsEntries: [shuffledInits],
    countPicsEntries: () =>
      get().picsEntries.length,
    pics: (from = 0) =>
      get().picsEntries[
        get().countPicsEntries() -
          ++from
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
          next ??
            shuffle([...currPics]),
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
    toggleVideoMode: (
      next?: boolean
    ) => {
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
      set((prev: TVideoState) => {
        const nextVideoPics = [
          ...new Set([
            ...prev.videoPics.filter(
              (v) => v !== next
            ),
          ]),
        ];
        if (
          nextVideoPics.length === 0
        ) {
          get().updatePicsEntries(
            get().picsEntries[0]
          );
        }
        return {
          videoPics: nextVideoPics,
        };
      }),
    updateState: () => null,
  });
