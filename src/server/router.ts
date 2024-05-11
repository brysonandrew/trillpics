import {
  router as _router,
  publicProcedure,
} from "~/server/trpc";
import { generate } from "~/server/generate";
import { TGenerateOutput } from "~/types/trpc/generate";
import { z } from "zod";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";

export const SCHEMA_INPUT = z
  .object({
    input: PIC_SERIES_SCHEMA,
    fps: z.number(),
  })
  .optional();

export const router = _router({
  generate: publicProcedure
    .input(SCHEMA_INPUT)
    .mutation(async ({ input }) => {
      if (!input) return null;
      const result: TGenerateOutput =
        await generate(input);

      return result;
    }),
});

export type TRouter = typeof router;
