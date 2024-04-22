import { inferReactQueryProcedureOptions } from "@trpc/react-query";
import { renderMedia } from "@remotion/renderer";
import { TPicSeriesProps } from "~/remotion/pic-series/types";
import { TRouter } from "~/server/router";
import {
  TRouterInputs,
  TRouterOutputs,
} from "~/types/trpc";

export type TSlowFrame = {
  frame: number;
  time: number;
};

export type TGenerateInput = {
  input: TPicSeriesProps;
  fps: number;
};

export type TGenerateOutput = Awaited<
  ReturnType<typeof renderMedia>
>;

export type TGenerateInputs =
  TRouterInputs["generate"];

export type TGenerateOutputs =
  TRouterOutputs["generate"];
export type ReactQueryOptions =
  inferReactQueryProcedureOptions<TRouter>;
