import { z } from "zod";

export const PIC_SERIES_SCHEMA =
  z.object({
    base: z.string().optional(),
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
    onProgress:z.function().optional(),
    onBrowserLog:z.function().optional(),
    onDownload:z.function().optional(),
  });
