import { TDimensions } from "@t/measure";
import { z } from "zod";

export const FPS = 30;
export const PIC_COUNT = 1;
export const VIDEO_PICS = [
  ...Array(PIC_COUNT),
].map((_, index) => index + 1);
export const PIC_DURATION_IN_SECONDS = 1;
export const PIC_DURATION_IN_FRAMES =
  PIC_DURATION_IN_SECONDS * FPS;
export const TOTAL_DURATION_IN_FRAMES =
  PIC_DURATION_IN_FRAMES * PIC_COUNT;

export const WIDTH = 16;
export const HEIGHT = 9;
export const ASPECT_RATIO =
  WIDTH / HEIGHT;

export const DIMENSIONS: TDimensions = {
  width: WIDTH,
  height: HEIGHT,
};

export const SCHEMA = z.object({
  pics: z.array(z.number()),
});
// z.object({
//   name: z.string(),
//   path: z.string(),
//   resolver: z.function(),
// })
