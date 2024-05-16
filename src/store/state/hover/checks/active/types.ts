import {
  THoverKey,
  THoverKeysState,
} from "~/store/state/hover/types";

export type THoverChecksConfig =
  Partial<THoverKeysState>;

export type THoverChecksHandler = (
  config?: THoverChecksConfig
) => boolean;

export type THoverChecksKeyHandler = (
  key: THoverKey,  config?: THoverChecksConfig
) => boolean;
