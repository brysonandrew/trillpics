import { TDimensions } from "@brysonandrew/config-types";

export const DEFAULT_FPS = 24;
export const PIC_COUNT = 1;
export const VIDEO_PICS = [
  ...Array(PIC_COUNT),
].map((_, index) => index + 1);
export const PIC_DURATION_IN_SECONDS = 1;
export const PIC_DURATION_IN_FRAMES =
  PIC_DURATION_IN_SECONDS * DEFAULT_FPS;
export const TOTAL_DURATION_IN_FRAMES =
  PIC_DURATION_IN_FRAMES * PIC_COUNT;
export const PIC_SIZE = 1024;
export const PIC_SIZE_05 = PIC_SIZE * 0.5;
export const PIC_SIZE_025 = PIC_SIZE * 0.25;

export const PIC_SIZE_0125 = PIC_SIZE * 0.125;

export const WIDTH = 1920;
export const HEIGHT = 1080;
export const ASPECT_RATIO =
  WIDTH / HEIGHT;

export const DIMENSIONS: TDimensions = {
  width: WIDTH,
  height: HEIGHT,
};
export const PIC_DIMENSIONS: TDimensions = {
  width: PIC_SIZE,
  height: PIC_SIZE,
};
