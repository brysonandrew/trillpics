type TConfig = {
  gain?: number;
  blend?: number;
  rate?: number;
  modulator?: number;
};
export const createRm = (
  context: AudioContext,
  {
    gain,
    rate,
    blend,
    modulator,
  }: TConfig
) => {
  const rm = new AudioWorkletNode(
    context,
    "ring-mod"
  );
  if (typeof gain === "number") {
    rm.parameters.get("gain").value =
      gain;
  }
  if (typeof blend === "number") {
    rm.parameters.get("blend").value =
      blend;
  }
  if (typeof rate === "number") {
    rm.parameters.get("rate").value =
      rate;
  }
  if (typeof modulator === "number") {
    rm.parameters.get(
      "modulator"
    ).value = modulator;
  }
  return rm;
};
