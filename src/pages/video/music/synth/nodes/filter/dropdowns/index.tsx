import { FC } from "react";
import { InputsSelect } from "~/components/inputs/select";
import { BIQUAD_FILTER_TYPES } from "~/pages/video/music/synth/nodes/filter/constants";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const NodesFilterDropdowns: FC =
  () => {
    const { audio: { filters: {filter }} } =
      useMusicRefs();

    const handleValueChange = (
      value: BiquadFilterType
    ) => {
      filter.type = value;
    };
    return (
      <InputsSelect
        name="type"
        title="type"
        placeholder="filter type"
        defaultValue={filter.type}
        values={BIQUAD_FILTER_TYPES}
        onValueChange={
          handleValueChange
        }
      />
    );
  };
