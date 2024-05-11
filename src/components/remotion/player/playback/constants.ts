export const SEEK_BACKWARD_SECONDS = -5;
export const SEEK_FORWARD_SECONDS = 5;

export const DEFAULT_CANVAS_COLOR = '#141322';

export const DEFAULT_FPS = 30;

type TMutableDimensionsFromAspectRatioLookup = {
  [key: string]: {width: number; height: number};
};
export const DIMENSIONS_FROM_ASPECT_RATIO_LOOKUP = {
  '2:3': {
    width: 1080,
    height: 1440,
  },
  '3:2': {
    width: 1440,
    height: 1080,
  },
  '16:9': {
    width: 1920,
    height: 1080,
  },
  '9:16': {
    width: 1080,
    height: 1920,
  },
  '1:1': {
    width: 1080,
    height: 1080,
  },
  '4:5': {
    width: 1080,
    height: 1350,
  },
  '21:9': {
    width: 2560,
    height: 1080,
  },
} as const satisfies TMutableDimensionsFromAspectRatioLookup;

export type TDimensionsFromAspectRatioLookupKey =
  keyof typeof DIMENSIONS_FROM_ASPECT_RATIO_LOOKUP;
export const DEFAULT_ASPECT_RATIO: TDimensionsFromAspectRatioLookupKey = '16:9';
export const ASPECT_RATIOS = Object.keys(
  DIMENSIONS_FROM_ASPECT_RATIO_LOOKUP
) as TDimensionsFromAspectRatioLookupKey[];

export const DEFAULT_WIDTH =
  DIMENSIONS_FROM_ASPECT_RATIO_LOOKUP[DEFAULT_ASPECT_RATIO].width;
export const DEFAULT_HEIGHT =
  DIMENSIONS_FROM_ASPECT_RATIO_LOOKUP[DEFAULT_ASPECT_RATIO].height;

export const SNAP_TOLERANCE_PX_UNSCALED = 10;

export const COLLAPSE_THRESHOLD_PX = 50; // how much to drag on resizable sidebar beyond the minSize before it collapses

export const PRESIGNED_UPLOAD_URL_VALIDITY_IN_SECONDS = 60 * 2; // 2 Minutes
export const PRESIGNED_GET_URL_VALIDITY_IN_SECONDS = 60 * 120; // 120 Minutes
export const MAX_UPLOAD_FILE_SIZE_IN_MB = 500;

export const TIMELINE_CATEGORIES = {
  visualMedia: ['image', 'video', 'background'],
  audioMedia: ['audio'],
  text: ['text', 'subtitles'],
  decorations: ['progressBar', 'waveform'],
} as const;
