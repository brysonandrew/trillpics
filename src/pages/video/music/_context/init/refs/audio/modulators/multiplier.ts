import { TAllParamsKey } from "~/pages/video/music/synth/nodes/modulators/types";
import { propsFromAudioparams } from "~/pages/video/music/synth/nodes/props-from-audioparams";

export const resolveMultiplier = (
  id: string,
  param: AudioParam
) => {
  const defaultRange =
    propsFromAudioparams(param);
  const idParts = id.split(".");
  const paramKey =
    idParts[idParts.length - 1];
  const key = paramKey as TAllParamsKey;
  if (key === "delayTime") {
    return 0.000001;
  }
  if (key === "frequency") {
    return (
      Number(
        defaultRange.defaultValue ??
          param.value ??
          1
      ) / 2
    );
  }
  if (key === "detune") {
    return 1000;
  }
  if (key === "Q") {
    return 0.1;
  }
  if (key === "gain") {
    return 0.2;
  }
  return defaultRange.step;
};