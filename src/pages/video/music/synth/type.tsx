import type { FC } from "react";
import { WRITABLE_OSCILLATOR_TYPES } from "react-synthwave";
import { SelectStyled } from "~/components/inputs/select/styled";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";

export const SynthType: FC = () => {
  const { audio } =
    useMusicInitContext();
  const { midis, set } = useTrillPicsStore(
    ({ midis, set }) => ({
      midis, set,
    })
  );
  const handleValueChange = (
    value: OscillatorType
  ) => {
    audio.oscillator.node.type = value;
    set((draft: TState) => {
      draft.midis.type = value;
    });
  };
  return (
    <SelectStyled
      name="midis.type"
      title="type"
      value={midis.type}
      values={WRITABLE_OSCILLATOR_TYPES}
      onValueChange={handleValueChange}
    />
  );
};
