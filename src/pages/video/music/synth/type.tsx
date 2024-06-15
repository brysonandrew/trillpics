import type { FC } from "react";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import { SelectStyled } from "~/components/inputs/select/styled";
import { TUpdateSliderHandler } from "~/components/inputs/slider/row";
import { useSynthUpdate } from "~/pages/video/music/synth/update";
import { useTrillPicsStore } from "~/store/middleware";

export const SynthType: FC =
  () => {
    const { synth } = useTrillPicsStore(
      ({ synth }) => ({
        synth,
      })
    );
    const handleUpdate: TUpdateSliderHandler =
      useSynthUpdate();
    return (
      <SelectStyled
        name="synth.type"
        title="type"
        value={synth.type}
        values={
          WRITABLE_OSCILLATOR_TYPES
        }
        onValueChange={(value) =>
          handleUpdate(
            "synth.type",
            value
          )
        }
      />
    );
  };
