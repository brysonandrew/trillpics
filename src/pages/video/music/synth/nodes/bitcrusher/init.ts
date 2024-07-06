export type TBitcrusherConfig =  {
  frequency?: number; // defaultValue: 0.4, minValue: 0, maxValue: 1,
  bits?: number; // 64; //defaultValue: 8, minValue: 0, maxValue: 128
};
export const bitcrusher = (
  context: AudioContext,
  config: TBitcrusherConfig = {}
) => {
  const { frequency, bits } = config;
  const bc = new AudioWorkletNode(
    context,
    "bitcrusher"
  );
  if (frequency) {
    bc.parameters.get(
      "frequency"
    ).value = frequency;
  }
  if (bits) {
    bc.parameters.get("bits").value =
      bits;
  }

  return bc;
};
