import {
  router as _router,
  publicProcedure,
} from "~/server/trpc";
import { generate } from "~/server/generate";
import { TGenerateOutput } from "~/types/trpc/generate";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";
import { z } from "zod";
import { observable } from "@trpc/server/observable";
import { EventEmitter } from "events";

export const SCHEMA_INPUT =
  PIC_SERIES_SCHEMA;
const ee = new EventEmitter();

export const router = _router({
  randomNumber:
    publicProcedure.subscription(() => {
      return observable<{
        randomNumber: number;
      }>((emit) => {
        const timer = setInterval(
          () => {
            // emits a number every second
            console.log("R");
            emit.next({
              randomNumber:
                Math.random(),
            });
          },
          200
        );

        return () => {
          clearInterval(timer);
        };
      });
    }),
  onProgress: publicProcedure
    .input(z.any())
    .subscription(() => {
      // return an `observable` with a callback which is triggered immediately
      return observable<any>((emit) => {
        const onData = (data: any) => {
          emit.next(data);
        };
        // trigger `onAdd()` when `add` is triggered in our event emitter
        ee.on("progress", onData);
        // ee.on('browser', onData);
        // ee.on('download', onData);

        // unsubscribe function when client disconnects or stops subscribing
        return () => {
          ee.off("progress", onData);
          // ee.off('browser', onData);
          // ee.off('download', onData);
        };
      });
    }),
  generate: publicProcedure
    .input(SCHEMA_INPUT)
    .mutation(async ({ input }) => {
      if (!input) return null;
      input.onProgress = (x) => {
        ee.emit("progress", x);
      };
      // input.onBrowserLog = (x) => {
      //   ee.emit("browser", x);
      // };
      // input.onDownload = (x) => {
      //   ee.emit("download", x);
      // };
      const result: TGenerateOutput =
        await generate(input);
      return result;
    }),
  // progress: publicProcedure
  // .input(
  //   z.any()
  // )
  // .mutation(async ({input}) => {
  //   if (!input) return null;
  //   const result: TGenerateOutput =
  //     await generate(input);

  //   return result;
  // })
});

export type TRouter = typeof router;
