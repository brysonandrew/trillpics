import { TSource } from '../../src/types/dom';
import { EXTS } from '../config';

// export type TDimensions = { width: number; height: number };

// export type TFilePathKey = string;
// export type TFilePathBaseKey = string;

// export type TExtKey = (typeof EXTS)[number];

export type TMediaDetails = {
  key: string;
  file: string;
  name: string;
  ext: TExtKey;
};

// export type TMedia = TMediaDetails & {
//   src: string;
// };

// export type TModuleConfig = {
//   filePath: string;
//   resolver: TResolver;
// } & TMediaDetails;
// export type TModuleEntry = [
//   filePath: string,
//   resolver: TResolver,
// ];
// export type TModuleEntries = TModuleEntry[];
// export type TModuleRecordEntry = [string, TModuleRecord];

// export type TModuleRecord = {
//   [WEBP_EXT]: TModuleConfig;
//   [DEFAULT_EXT]: TModuleConfig;
// };

// export type TMediaRecord = {
//   [WEBP_EXT]: TMedia;
//   [DEFAULT_EXT]: TMedia;
// };

// export type TMediaRecordEntry = [string, TMediaRecord];
// export type TMediaRecordEntrys = TMediaRecordEntry[];

// export type TMediaRecords = TMediaRecord[];

// ---- NEW

import type {
  Metadata,
  OutputInfo,
} from 'sharp';
export type TDimensions = {
  width: number;
  height: number;
};

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
