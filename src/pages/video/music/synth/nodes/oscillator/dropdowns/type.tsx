import { FC } from "react";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import { SelectStyled } from "~/components/inputs/select/styled";
import { useContextMusicInit } from "~/pages/video/music/_context/init";

export const NodesOscillatorDropdownsType: FC =
  () => {
    const { oscillator } =
      useContextMusicInit();

    const handleValueChange = (
      value: OscillatorType
    ) => {
      oscillator.node.type = value;
      // set((draft: TState) => {
      //   draft.midis.type = value;
      // });
    };
    return (
      <SelectStyled
        name="midis.type"
        title="type"
        placeholder="oscillator type"
        defaultValue={
          oscillator.node.type
        }
        values={
          WRITABLE_OSCILLATOR_TYPES
        }
        onValueChange={
          handleValueChange
        }
      />
    );
  };
