import type { TOConfig } from "./types";

export const createBasicO = ({
  context,
  type,
  frequency,
  detune,
}: TOConfig) => {
  const o = context.createOscillator();
  if (type) {
    o.type = type;
  }
  if (typeof frequency === "number") {
    o.frequency.value = frequency;
  }
  if (typeof detune === "number") {
    o.detune.value = detune;
  }
  return o;
};
