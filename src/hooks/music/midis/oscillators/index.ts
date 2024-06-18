import { resolveOscillator } from "~/hooks/music/midis/oscillators/resolveWaveType";
import { TOConfig, TOscillatorNodeKey } from "~/hooks/music/midis/oscillators/types";
import { TCreateConfig } from "~/types/music";


export const createO = ({
  context,
  wave,
  ...rest
}: TOConfig & TCreateConfig) => {
  const o = resolveOscillator({ context, wave });
  Object.entries(rest).forEach(([key, value]) => {
    const param: AudioParam = o[
      key as TOscillatorNodeKey
    ] as AudioParam;
    if (typeof param !== "string") {
      param.value = value as number;
    }
  });
  return o;
};
