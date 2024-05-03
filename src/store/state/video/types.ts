import {
  TPic,
  TPics,
} from "~/store/state/pics/types";

export type TVideoKey =
  | string
  | number;
export type TVideoAddState = {
  addVideoPic(nextPic: TPic): void;
  addVideoPics(nextPics: TPics): void;
};
export type TVideoRemoveState = {
  removeVideoPic(next?: TPic): void;
  removeVideoPics(
    nextPics: TPics | null
  ): void;
};
export type TVideoState =
  TVideoAddState &
    TVideoRemoveState & {
      isPlaying: boolean;
      fps: number;
      durationInFrames: number;
      videoPics: TPics;
      countVideoPics(): number;
      isVideoPics(): boolean;
    };
