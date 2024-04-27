import { TPics } from "~/store/slices/pics/types";
import { TStateCreator } from "~/store/types";

export type TDirectorKey =
  | string
  | number;

export type TDirectorState = {
  isPlaying: boolean;
  fps: number;
  durationInFrames: number;
  videoPics: TPics;
  countVideoPics(): number;
  isVideoPics(): boolean;
  addVideo(next: string): void;
  removeVideo(next?: string): void;
};

export type TDirectorStateCreator =
  TStateCreator<TDirectorState>;
