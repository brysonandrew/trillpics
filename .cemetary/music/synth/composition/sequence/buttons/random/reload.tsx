import type { FC } from "react";
import { PillB } from "~/components/buttons/pill/b";
import { IconsReload } from "~/components/icons/reload";
import { useSequenceButtonsRandom } from "~/pages/video/music/synth/composition/sequence/buttons/random/hook";

export const SynthReload: FC = () => {
  const handler =
    useSequenceButtonsRandom();
  return (
    <PillB
      title="Randomize Synth"
      Icon={IconsReload}
      direction="rtl"
      onClick={handler}
    ></PillB>
  );
};
