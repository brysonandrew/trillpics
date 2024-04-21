import {
  TRouterInputs,
  TRouterOutputs,
} from "~/types/trpc";

export type TSlowFrame = {
  frame: number;
  time: number;
};
export type TRenderMediaResult = {
  buffer: Buffer | null;
  slowestFrames: TSlowFrame[];
};

export type TGenerateInputs =
  TRouterInputs["generate"];

export type TGenerateOutputs =
  TRouterOutputs["generate"];
