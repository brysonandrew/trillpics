import { FC } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { BIQUAD_FILTER_NUMBER_OPTIONS } from "~/pages/video/music/synth/nodes/filter/constants";
import {
  TBiquadFilterNumberOptionsKey,
  TBiquadFilterParams,
} from "~/pages/video/music/synth/nodes/filter/types";
import { ModulatorsParams } from "~/pages/video/music/synth/nodes/modulators/params";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useIdContext } from "~/pages/video/music/_context/init/refs/audio/id";
import { resolveObjectKeys } from "~/utils/object";

export const NodesFilterNumbers: FC<
  TUpdateNodeHandlerProps<TBiquadFilterNumberOptionsKey>
> = (props) => {
  const {
    audio: { filters },
  } = useMusicRefs();
  const id = useIdContext();

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
    return [key, param, handler];
  });
  return (
    <ModulatorsParams
      type="filter"
      params={
        params as TBiquadFilterParams
      }
    />
  );
};
