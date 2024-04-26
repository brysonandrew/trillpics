import { TMilestones } from "~/types/milestones";
import { PlayerRef } from "@remotion/player";

export type TPic = string;
export type TPics = TPic[];
export type THoverKey = string | number;

export type TVideoState = {
  hoverKeys: THoverKey[];
  isHover: (
    hoverKey: THoverKey
  ) => boolean;
  hover: (hoverKey: THoverKey) => void;
  unhover: (
    hoverKey: THoverKey
  ) => void;
  milestones: TMilestones;
  isControls: boolean;
  fps: number;
  durationInFrames: number;
  picsCount: number;
  picsEntries: TPics[];
  videoPics: TPics;
  isPlaying: boolean;
  isPlayerOpen: boolean;
  playerElement: PlayerRef | null;
  toggleControls(next?: boolean): void;
  togglePlayer(next?: boolean): void;
  updatePicsEntries(next?: TPics): void;
  addVideo(next: string): void;
  countVideoPics(): number
  isVideoPics(): boolean
  removeVideo(next?: string): void;
  countPicsEntries(): number;
  countPics(): number;
  pics(from?: number): string[];
  seekBySeconds: (
    seconds: number
  ) => void;
  setCurrentFrame: (
    nextCurrentFrame: number
  ) => void;
  updateState(
    state: Partial<TVideoState>
  ): void;
};
