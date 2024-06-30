import { resolveObjectKeys } from "~/utils/object";

export const KARPLUS_STRONG_NUMBER_OPTIONS =
  {
    gain: "gain",
    delayTime: "delayTime",
    // frequency: "frequency",
  };

export const KARPLUS_STRONG_PARAMS =
  resolveObjectKeys(
    KARPLUS_STRONG_NUMBER_OPTIONS
  );
