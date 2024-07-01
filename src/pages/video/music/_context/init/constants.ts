import { TScaleKey } from "~/constants/scales";
import { TScalePattern } from "~/pages/video/music/synth/composition/scale/types";

export const MIME_TYPES = [
  "video/mp4;codecs=h264,aac",
  "video/webm;codecs=vp9,opus",
  "video/webm;codecs=vp8,opus",
  "video/webm;codecs=h264,opus",
  "video/mp4;codecs=h264,aac",
];

export const useSupportedMimeTypes = () => MIME_TYPES.filter((mimeType: string) => MediaRecorder.isTypeSupported(mimeType));
export const DEFAULT_SCALE_KEY:TScaleKey = 'blues'
export const DEFAULT_SCALE_DELTA = 1
export const DEFAULT_SCALE_PATTERN:TScalePattern = 'desc'
