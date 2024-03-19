import { create } from "zustand";

type TVideoState = {
  videoPics: number[];
  isVideoMode: boolean;
  isPreviewOpen: boolean;
  toggleVideoMode(next?: boolean): void;
  togglePreview(next?: boolean): void;
  addVideo(next: number): void;
  removeVideo(next: number): void;
};
export const useVideoStore =
  create<TVideoState>((set) => ({
    videoPics: [],
    isVideoMode: false,
    isPreviewOpen: false,
    togglePreview: (next?: boolean) => {
      set((prev: TVideoState) => ({
        isPreviewOpen:
          next ?? !prev.isPreviewOpen,
      }));
    },
    toggleVideoMode: (next?: boolean) =>
      set((prev: TVideoState) => ({
        isVideoMode:
          next ?? !prev.isVideoMode,
      })),
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
    // bears: 0,
    // increasePopulation: () =>
    //   set((state) => ({
    //     bears: state.bears + 1,
    //   })),
    // removeAllBears: () =>
    //   set({ bears: 0 }),
    // updateBears: (newBears) =>
    //   set({ bears: newBears }),
  }));
