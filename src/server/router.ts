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
import type {
  RenderMediaOnProgress,
  RenderMediaOnDownload,
} from "@remotion/renderer";

export const SCHEMA_INPUT =
  PIC_SERIES_SCHEMA;
const ee = new EventEmitter();

export const router = _router({
  progress: publicProcedure
    .input(z.any())
    .subscription(() => {
      return observable<any>((emit) => {
        const handleProgress = (
          data: RenderMediaOnProgress
        ) => {
          emit.next({
            type: "progress",
            data,
          });
        };
        const handleLog = (
          data: string
        ) => {
          emit.next({
            type: "log",
            data,
          });
        };
        const handleDownload = (
          data: RenderMediaOnDownload
        ) => {
          emit.next({
            type: "download",
            data,
          });
        };
        ee.on(
          "progress",
          handleProgress
        );
        ee.on("log", handleLog);
        ee.on(
          "download",
          handleDownload
        );

        return () => {
          ee.off(
            "progress",
            handleProgress
          );
          ee.off("log", handleLog);
          ee.off(
            "download",
            handleDownload
          );
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
      input.onLog = (x) => {
        ee.emit("log", x);
      };
      input.onDownload = (x) => {
        ee.emit("download", x);
      };
      const result: TGenerateOutput =
        await generate(input);
      return result;
    }),
});

export type TRouter = typeof router;
