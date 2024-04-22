import {
  router as _router,
  publicProcedure,
} from "~/server/trpc";
import { generate } from "~/server/generate";
import {
  TGenerateInput,
  TGenerateOutput,
} from "~/types/trpc/generate";
import { ResolveOptions } from "@trpc/server/dist/core/internals/utils";
import { z } from "zod";

const DEFAULT: TGenerateInput = {
  input: {
    pics: [],
  },
  fps: 3,
};

export const SCHEMA_INPUT = z
  .object({
    input: z.object({
      pics: z.array(z.string()),
    }),
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
