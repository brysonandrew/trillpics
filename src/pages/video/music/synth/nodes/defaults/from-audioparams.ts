import { defaultsRange } from "~/pages/video/music/synth/nodes/defaults/range";
import { INPUTS_NUMBER_OVERRIDES } from "~/pages/video/music/_context/refs/audio/constants";

export const defaultsFromAudioparams = (
  audioParam: AudioParam | null,
  key?: string,
  type?: string
) => {
  const overrides =
    INPUTS_NUMBER_OVERRIDES;

  const defaults = defaultsRange(
    audioParam,
    type,
    key
  );

  return {
    ...defaults,
    ...(key ? overrides[key] : {}),
  } as const;
};
