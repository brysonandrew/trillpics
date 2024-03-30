import { StateCreator } from "zustand";

export type TVideoState = {
  videoPics: string[];
  isVideoMode: boolean;
  isPreviewOpen: boolean;
  toggleVideoMode(next?: boolean): void;
  togglePreview(next?: boolean): void;
  addVideo(next: string): void;
  removeVideo(next: string): void;
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
