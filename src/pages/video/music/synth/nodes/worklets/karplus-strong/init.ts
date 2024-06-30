type TConfig = {
  gain?: number;
  delayTime?: number;
  stretch?: number;
};
export const karplusStrong = (
  context: AudioContext,
  config: TConfig = {}
) => {
  const { gain, delayTime, stretch } =
    config;
  const ks = new AudioWorkletNode(
    context,
    "karplus-strong"
  );
  if (gain) {
    ks.parameters.get("gain").value =
      gain;
  }
  if (delayTime) {
    ks.parameters.get(
      "delayTime"
    ).value = delayTime;
  }
  if (stretch) {
    ks.parameters.get("stretch").value =
      stretch;
  }
  ks.parameters.get(
    "gain"
  ).value = 0.99;
  ks.parameters.get(
    "delayTime"
  ).value = 0;
  ks.parameters.get(
    "stretch"
  ).value = 1000;

  return ks;
};
