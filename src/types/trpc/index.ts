import {
  type inferRouterInputs,
  type inferRouterOutputs,
} from "@trpc/server";
import { TRouter } from "~server/router";

export type TRouterInputs =
  inferRouterInputs<TRouter>;

export type TRouterOutputs =
  inferRouterOutputs<TRouter>;
