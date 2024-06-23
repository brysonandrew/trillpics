import { FC } from "react";
import { SelectStyled } from "~/components/inputs/select/styled";
import { BIQUAD_FILTER_TYPES } from "~/pages/video/music/synth/nodes/filter/constants";
import { useContextMusicInit } from "~/pages/video/music/_context/init";

export const NodesFilterDropdownsType: FC =
  () => {
    const { filter } =
      useContextMusicInit();

    const handleValueChange = (
      value: BiquadFilterType
    ) => {
      filter.type = value;
    };
    return (
      <SelectStyled
        name="midis.type"
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
