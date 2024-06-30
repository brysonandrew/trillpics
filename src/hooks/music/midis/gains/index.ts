import { TInitConfig } from "~/types/music";
export const GAIN_PARAMS = ['gain'] as const;

type TGainNodeKey = keyof Pick<GainNode, "gain">;
type TGainNodeConfig = TInitConfig &
  Partial<Record<TGainNodeKey, number>>;
export const createG = ({
  context,
  gain,
}: TGainNodeConfig) => {
  const g = context.createGain();
  if (typeof gain === "number") {
    g.gain.value = gain;
  } else {
    g.gain.value = 0;
  }

  return g;
};
