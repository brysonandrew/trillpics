import { z } from "zod";

export const PIC_SERIES_SCHEMA =
  z.object({
    base: z.string().optional(),
    recording: z
      .object({
        src: z.string(),
        seconds: z.number(),
      })
      .optional()
      .nullable(),
    pics: z.array(z.string()),
    seconds: z.number(),
    count: z.number(),
    isPics: z.boolean(),
    fps: z.number(),
    durationInFrames: z.number(),
    dimensions: z.object({
      height: z.number(),
      width: z.number(),
    }),
    onProgress: z.function().optional(),
    onLog: z.function().optional(),
    onDownload: z.function().optional(),
  });
