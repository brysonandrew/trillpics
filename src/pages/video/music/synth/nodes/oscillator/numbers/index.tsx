import type { FC } from "react";
import {
  TUpdateNodeHandlerProps,
  TUpdateNumberHandler,
} from "~/components/inputs/slider/types";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { OSCILLATOR_NUMBER_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/constants";
import {
  TOscillatorNumberOptionsKey,
  TOscillatorParams,
} from "~/pages/video/music/synth/nodes/oscillator/types";
import { resolveObjectKeys } from "~/utils/object";

export const NodesOscillatorNumbers: FC<
  TUpdateNodeHandlerProps<TOscillatorNumberOptionsKey>
> = (props) => {
  const keys = resolveObjectKeys(
    OSCILLATOR_NUMBER_OPTIONS
  );
  const params = keys.map((key) => {
    const param =
      props.resolveParam(key);

    const handleUpdate: TUpdateNumberHandler =
      (value) => {
        props.onUpdate(key, value);
      };
    return [key, param, handleUpdate];
  });
  return (
    <ModulatorsParams
      type="oscillator"
      params={
        params as TOscillatorParams
      }
    />
  );
};
