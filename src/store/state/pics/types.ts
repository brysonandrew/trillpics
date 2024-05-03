import {
  TTableCreateConfig,
} from "~/store/state/table/types";

export type TPic = string | number;
export type TPics = TPic[];

export type TPicsState = {
  picsCount: number;
  picsEntries: TPics[];
  countPicsEntries(): number;
  countPics(): number;
  pics(from?: number): TPics;
  updatePicsEntries(
    config?: Pick<
      TTableCreateConfig,
      "cells"
    >
  ): void;
};
