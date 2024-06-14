import type { FC } from "react";
import { PillB } from "~/components/buttons/pill/b";
import { IconsLoader } from "~/components/icons/loader";
import { IconsReload } from "~/components/icons/reload";
import { useMusicMidisPatterns } from "~/hooks/music/midis/patterns";
import { useTimer } from "~/hooks/use-timer";

export const SynthReload: FC = () => {
  const handle =
    useMusicMidisPatterns();
  const [isLoading, handleStart] =
    useTimer(400, handle);
  return (
    <PillB
      title="Reload Synth"
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
