import { resolveObjectKeys } from "~/utils/object";

export const BITCRUSHER_NUMBER_OPTIONS =
  {
    frequency: "frequency",
    bits: "bits",
  };

export const BITCRUSHER_PARAMS =
  resolveObjectKeys(
    BITCRUSHER_NUMBER_OPTIONS
  );
