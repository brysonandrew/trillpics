import {
  type inferRouterInputs,
  type inferRouterOutputs,
} from "@trpc/server";
import { createTRPCReact } from "@trpc/react-query";
import { TAppRouter } from "netlify/functions/trpc";

export const trpc =
  createTRPCReact<TAppRouter>();

/**
 * Inference helper for inputs
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs =
  inferRouterInputs<TAppRouter>;
/**
 * Inference helper for outputs
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs =
  inferRouterOutputs<TAppRouter>;
