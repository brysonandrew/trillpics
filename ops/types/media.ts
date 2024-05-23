import { EXTS } from "../config";

export type TMediaDetails = {
  key: string;
  file: string;
  name: string;
  ext: TExtKey;
};
import type {
  Metadata,
  OutputInfo,
} from "sharp";
import {
  TDimensions,
  TSource,
} from "@brysonandrew/config-types";
// export type TDimensions = {
//   width: number;
//   height: number;
// };

export type TFilePathKey = string;
export type TFilePathBaseKey = string;

export type TExtKey =
  (typeof EXTS)[number];

export type TMedia = {
  src: string;
  alt: string;
};

export type TSources = TSource[];

export type TAppMeta = {
  project: string;
};

export type TFsMeta = {
  name: string;
  dir: string;
};

export type TMediaMetadata = Partial<
  OutputInfo & Metadata
>;

export type TMediaRecord = TAppMeta &
  TFsMeta &
  TMedia &
  TDimensions & {
    metadata: TMediaMetadata;
    sources: TSource[];
  };
export type TMediaRecords =
  TMediaRecord[];
