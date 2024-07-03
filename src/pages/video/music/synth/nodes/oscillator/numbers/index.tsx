import type { FC } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { ModulatorsParams } from "~/pages/video/music/synth/nodes/modulators/params";
import { OSCILLATOR_NUMBER_OPTIONS } from "~/pages/video/music/synth/nodes/oscillator/constants";
import { TOscillatorNumberOptions, TOscillatorNumberOptionsKey, TOscillatorParams } from "~/pages/video/music/synth/nodes/oscillator/types";
import { useIdContext } from "~/pages/video/music/_context/init/refs/audio/id";
import { resolveObjectKeys } from "~/utils/object";

export const NodesOscillatorNumbers: FC<
  TUpdateNodeHandlerProps<TOscillatorNumberOptionsKey>
> = (props) => {
  const id = useIdContext();

  const keys = resolveObjectKeys(
    OSCILLATOR_NUMBER_OPTIONS
  );
  const params = keys.map((key) => {
    const param =
      props?.resolveParam?.(key);
    return [key, param, props.onUpdate];
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
