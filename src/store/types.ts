import { PlayerRef } from "@remotion/player";

export type TPic = string;
export type TPics = TPic[];

export type TVideoState = {
  fps: number;
  playerElement: PlayerRef | null;
  picsCount: number;
  picsEntries: TPics[];
  videoPics: TPics;
  isPlaying:boolean
  isVideoMode: boolean;
  isPreviewOpen: boolean;
  toggleVideoMode(next?: boolean): void;
  togglePreview(next?: boolean): void;
  updatePicsEntries(next?: TPics): void;
  addVideo(next: string): void;
  removeVideo(next: string): void;
  countPicsEntries(): number;
  countPics(): number;
  pics(from?: number): string[];
  updateState(state:Partial<TVideoState>):void
};

// export type TPartialState =
//   Partial<TVideoState>;
// type ExtractState<S> = S extends { getState: () => infer X } ? X : never
