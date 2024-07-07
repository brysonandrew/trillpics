import type { FC } from "react";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { OSCILLATOR_NUMBER_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { TOscillatorParamKey } from "~/pages/video/music/synth/nodes/oscillator/types";
import { TResolveAudioParamProps } from "~/pages/video/music/types";
import { resolveObjectKeys } from "~/utils/object";

export const NodesOscillatorNumbers: FC<
  TResolveAudioParamProps<TOscillatorParamKey>
> = (props) => {
  const keys = resolveObjectKeys(
    OSCILLATOR_NUMBER_OPTIONS
  );

  return (
    <ModulatorsParams
      graphKey="oscillator"
      keys={keys}
      {...props}
    />
  );
};

// const params = keys.map((key) => {
// const param =
//   props.resolveAudioParam(key);

// const handleUpdate: TUpdateNumberHandler =
//   (value) => {
//     props.resolveAudioParam(key).value =
//       value;
//   };
//   return [key, resolveAudioParam];
// });
