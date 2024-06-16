import type { FC } from "react";
import { PillBXs } from "~/components/buttons/pill/b/xs";
import { IconsChevronsUp } from "~/components/icons/chevrons/up";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisSequenceIncrementer } from "~/pages/video/music/synth/incrementer/hook";
import { useTimer } from "~/hooks/use-timer";

export const SynthDelayUp: FC = () => {
  const handle =
    useMidisSequenceIncrementer('delay');
  const [isLoading, handleStart] =
    useTimer(100, handle.up);
  return (
    <PillBXs
      title="Delay +1"
      Icon={
        isLoading
          ? IconsLoader
          : IconsChevronsUp
      }
      onClick={handleStart}
    />
  );
};
