import {
  TTableCreateConfig,
} from "~/store/slices/table/types";
import { TStateCreator } from "~/store/types";

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

export type TPicsStateCreator =
  TStateCreator<TPicsState>;
