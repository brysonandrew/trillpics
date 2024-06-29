import type { FC } from "react";
import { PillB } from "~/components/buttons/pill/b";
import { IconsLoader } from "~/components/icons/loader";
import { IconsReload } from "~/components/icons/reload";
import { useNodesRandom } from "~/hooks/music/midis/random";
import { useTimer } from "~/hooks/use-timer";

export const SynthReload: FC = () => {
  const handle = useNodesRandom();
  const [isLoading, handleStart] =
    useTimer(400, handle);
  return (
    <PillB
      title="Randomize Synth"
      Icon={
        isLoading
          ? IconsLoader
          : IconsReload
      }
      direction="rtl"
      onClick={handleStart}
    ></PillB>
  );
};
