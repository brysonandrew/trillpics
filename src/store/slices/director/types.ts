import {
  TPic,
  TPics,
} from "~/store/slices/pics/types";
import { TStateCreator } from "~/store/types";

export type TDirectorKey =
  | string
  | number;
export type TDirectorAddState = {
  addVideoPic(nextPic: TPic): void;
  addVideoPics(nextPics: TPics): void;
};
export type TDirectorRemoveState = {
  removeVideoPic(next?: TPic): void;
  removeVideoPics(
    nextPics: TPics | null
  ): void;
};
export type TDirectorState =
  TDirectorAddState &
    TDirectorRemoveState & {
      isPlaying: boolean;
      fps: number;
      durationInFrames: number;
      videoPics: TPics;
      countVideoPics(): number;
      isVideoPics(): boolean;
    };

export type TDirectorStateCreator =
  TStateCreator<TDirectorState>;
