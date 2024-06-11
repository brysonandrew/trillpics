import {
  useContext as useReactContext,
  createContext,
} from "react";
import type {
  TAction,
  TContext,
} from "./types";

export const Context =
  createContext<TContext>({
    dispatch: (_: TAction) => null,
  } as any);

export const useSynthwaveContext =
  (): TContext =>
    useReactContext<TContext>(Context);
