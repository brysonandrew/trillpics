import { TVideoState } from "src/store/types";
import { StateCreator } from "zustand";

const VIDEO_COUNT = ~~(
  Math.random() * 4 +
  12
);

export const resolveState: StateCreator<
  TVideoState
> = (set) => ({
  videoPics: [
    ...Array(VIDEO_COUNT),
  ].map((_) => ~~(500 * Math.random())),
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
  addVideo: (next: number) =>
    set((prev: TVideoState) => ({
      videoPics: [
        ...new Set([
          ...prev.videoPics,
          next,
        ]),
      ],
    })),
  removeVideo: (next: number) =>
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
