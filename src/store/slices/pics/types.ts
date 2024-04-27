import { TStateCreator } from "~/store/types";

export type TPic = string;
export type TPics = TPic[];

export type TPicsState = {
  picsCount: number;
  picsEntries: TPics[];
  countPicsEntries(): number;
  countPics(): number;
  pics(from?: number): string[];
  updatePicsEntries(next?: TPics): void;
};

export type TPicsStateCreator =
  TStateCreator<TPicsState>;
