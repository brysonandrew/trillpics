import { useMemo } from "react";
import { TInitConfig } from "~/types/music";

type TGainNodeKey = keyof Pick<
  GainNode,
  "gain"
>;
type TGainNodeConfig = TInitConfig &
  Partial<Record<TGainNodeKey, number>>;
export const useGainNode = ({
  context,
  gain,
}: TGainNodeConfig) => {
  const result = useMemo(() => {
    const g = context.createGain();
    if (typeof gain === "number") {
      g.gain.value = gain;
    } else {
      g.gain.value = 0;
    }

    return g;
  }, []);

  return result;
};
