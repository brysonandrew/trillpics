import { FC } from "react";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import { InputsSelect } from "~/components/inputs/select";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const NodesOscillatorDropdowns: FC =
  () => {
    const {
      audio: {
        oscillator,
      },
    } = useMusicRefs();

    const handleValueChange = (
      value: OscillatorType
    ) => {
      oscillator.node.type = value;
    };
    return (
      <InputsSelect
        name="type"
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
