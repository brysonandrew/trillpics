import { title } from "process";
import { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { BIQUAD_FILTER_TYPES } from "~/pages/video/music/synth/nodes/filter/constants";
import {
  TBiquadFilterNumberOptionsKey,
  TBiquadFilterOptionsKey,
} from "~/pages/video/music/synth/nodes/filter/types";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { useIdContext } from "~/pages/video/music/_context/init/refs/audio/id";

export const NodesFilterDropdowns: FC<
  TUpdateNodeHandlerProps<'type', BiquadFilterType>
> = (props) => {
  const {
    audio: { filters },
  } = useMusicRefs();
  const id = useIdContext();

  const handleValueChange = (
    value: BiquadFilterType
  ) => {
    props.onUpdate?.("type", value);
    // audio.graph.refs[id].type = value;
  };
  return (
    <InputsSelect
      name="type"
      title="type"
      placeholder="filter type"
      defaultValue={
        props.defaultValue?.("type")

        // audio.graph.refs[id].type
      }
      values={BIQUAD_FILTER_TYPES}
      onValueChange={handleValueChange}
    />
  );
};
