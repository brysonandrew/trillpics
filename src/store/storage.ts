import { TVideoState } from "~/store/types";
import { createJSONStorage } from "zustand/middleware";
import localforage from "localforage";

export const STORAGE = {
  name: "PERSIST_STORE_KEY",
  partialize: (state: TVideoState) => ({
    fps: state.fps,
    durationInFrames:
      state.durationInFrames,
    isPlayerOpen: state.isPlayerOpen,
    isVideoMode: state.isVideoMode,
    picsCount: state.picsCount,
    picsEntries: state.picsEntries,
    videoPics: state.videoPics,
    milestones: state.milestones,
  }),
  storage:
    createJSONStorage<TVideoState>(
      () => localforage
    ),
};
