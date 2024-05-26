import { z } from "zod";

export const PIC_SERIES_SCHEMA =
  z.object({
    pics: z.array(z.string()),
    seconds: z.number(),
    count: z.number(),
    isPics: z.boolean(),
    dimensions: z.object({
      height: z.number(),
      width: z.number(),
    }),
  });
