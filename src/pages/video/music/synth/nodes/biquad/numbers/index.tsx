import { FC } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { BIQUAD_FILTER_NUMBER_OPTIONS, BIQUAD_KEY } from "~/pages/video/music/synth/nodes/biquad/constants";
import {
  TBiquadFilterNumberOptionsKey,
  TBiquadFilterParams,
} from "~/pages/video/music/synth/nodes/biquad/types";
import { ModulatorsParams } from "~/pages/video/music/modulators/params";
import { resolveObjectKeys } from "~/utils/object";

export const NodesBiquadNumbers: FC<
  TUpdateNodeHandlerProps<TBiquadFilterNumberOptionsKey>
> = (props) => {
  // const handleUpdate =
  //   (
  //     name: TBiquadFilterNumberOptionsKey
  //   ) =>
  //   (value: number) => {
  //     audio.graph.refs[id][name].value = value;
  //   };

  const keys = resolveObjectKeys(
    BIQUAD_FILTER_NUMBER_OPTIONS
  );
  const params = keys.map((key) => {
    const handler = (value: number) =>
      props.onUpdate?.(key, value);

    const param =
      props.resolveParam?.(key);
    // audio.graph.refs[id][key];
    return [key, param, handler] as const;
  });
  return (
    <ModulatorsParams
      type={BIQUAD_KEY}
      params={
        params as TBiquadFilterParams
      }
    />
  );
};
