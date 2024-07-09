import { TRingModParamsKey } from "~/pages/video/music/_context/refs/audio/ring-mod/types";
import { resolveObjectKeys } from "~/utils/object";

export const RING_MOD_NUMBER_OPTIONS: Record<
  TRingModParamsKey,
  TRingModParamsKey
> = {
  gain: "gain",
  rate: "rate",
  blend: "blend",
  waveform: "waveform",
};

export const RING_MOD_PARAMS =
  resolveObjectKeys(
    RING_MOD_NUMBER_OPTIONS
  );
