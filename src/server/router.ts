import {  router as _router,  publicProcedure,} from "~/server/trpc";
import { generate } from "~/server/generate";
import { TGenerateOutput } from "~/types/trpc/generate";
import { PIC_SERIES_SCHEMA } from "~/components/remotion/pic-series/schema";
import { type } from "os";
import { onProgress } from "~/server/generate/webpack/on-progress";
import { initTRPC } from '@trpc/server';
import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import type { CreateWSSContextFnOptions } from '@trpc/server/adapters/ws';
import { applyWSSHandler } from '@trpc/server/adapters/ws';
import { observable } from '@trpc/server/observable';
// import { WebSocketServer } from 'ws';
import { EventEmitter } from 'events';

export const SCHEMA_INPUT =
  PIC_SERIES_SCHEMA;
  const ee = new EventEmitter();

export const router = _router({
  randomNumber: publicProcedure.subscription(() => {
    return observable<{ randomNumber: number }>((emit) => {
      const timer = setInterval(() => {
        // emits a number every second
        console.log("R")
        emit.next({ randomNumber: Math.random() });
      }, 200);

      return () => {
        clearInterval(timer);
      };
    });
  }),
  onProgress: publicProcedure.subscription(() => {
    // return an `observable` with a callback which is triggered immediately
    return observable<any>((emit) => {
      const onAdd = (data: any) => {
console.log("▁▁▁▁▂▂▂▂▃▃▃▃▄▄▄▅▅▅▅▆▆▆▆▇▇▇▇██▓▒░ 🧨 ░▒▓█▓▒░ 🧨 ░▒▓██▇▇▇▇▆▆▆▆▅▅▅▅▄▄▄▃▃▃▃▂▂▂▂▁▁▁▁");
console.dir(data);
console.log("██████████████▓▒░ 🧨 ░▒ line: 37, file: router.ts ▓▒░ 🧨 ░▒██████████████");
        // emit data to client
        console.log("DATA    DATA ", data)
        emit.next(data);
      };
      // trigger `onAdd()` when `add` is triggered in our event emitter
      ee.on('generate', onAdd);
      // unsubscribe function when client disconnects or stops subscribing
      return () => {
        ee.off('generate', onAdd);
      };
    });
  }),
  generate: publicProcedure
    .input(SCHEMA_INPUT)
    .mutation(async ({input}) => {
      if (!input) return null;
      ee.emit('generate', input);

      const result: TGenerateOutput =
        await generate(input);
        ee.emit('generate', result);

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
