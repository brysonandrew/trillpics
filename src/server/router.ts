import {
  router as _router,
  publicProcedure,
} from "~/server/trpc";
import { generate } from "~/server/generate";
import { TRenderMediaResult } from "~/types/trpc/generate";
import { input } from "~root/build/612.bundle";

export const router = _router({
  // hi: publicProcedure.query(() => "hi"),
  generate: publicProcedure.mutation(
    async (x) => {
      console.log(x);
      // const result: TRenderMediaResult =
      //   await generate({ input, fps });

    //  return result;
    }
  ),
});

export type TRouter = typeof router;
