import { resolveObjectKeys } from "~/utils/object";
export const KARPLUS_KEY =
  "karplus-strong" as const;

export const KARPLUS_OPTIONS = {
  gain: "gain",
  delayTime: "delayTime",
};

export const KARPLUS_PARAMS =
  resolveObjectKeys(KARPLUS_OPTIONS);
