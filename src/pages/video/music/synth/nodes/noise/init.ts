export type TNoiseConfig = {
  gain?: number;
};
export const noise = (
  context: AudioContext,
  config: TNoiseConfig = {}
) => {
  const { gain } = config;
  const nw = new AudioWorkletNode(
    context,
    "white-noise"
  );
  if (gain) {
    nw.parameters.get("gain").value =
      gain;
  }

  return nw;
};
