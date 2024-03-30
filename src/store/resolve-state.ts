import { TVideoState } from "src/store/types";
import { StateCreator } from "zustand";

export const resolveState: StateCreator<
  TVideoState
> = (set) => ({
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
