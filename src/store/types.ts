import { StateCreator } from "zustand";

export type TVideoState = {
  videoPics: number[];
  isVideoMode: boolean;
  isPreviewOpen: boolean;
  toggleVideoMode(next?: boolean): void;
  togglePreview(next?: boolean): void;
  addVideo(next: number): void;
  removeVideo(next: number): void;
};

export type TMiddlewareParam = [
  ["zustand/persist", unknown]
  // ['zustand/devtools', never],
  // ['zustand/immer', never]
];

export type TStateCreator<T> =
  StateCreator<
    T,
    [],
    TMiddlewareParam,
    TVideoState
  >;
