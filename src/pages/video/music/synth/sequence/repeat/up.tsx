import type { FC } from "react";
import { PillBXs } from "~/components/buttons/pill/b/xs";
import { IconsChevronsUp } from "~/components/icons/chevrons/up";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisSequenceIncrementer } from "~/hooks/music/midis/sequence/incrementer";
import { useTimer } from "~/hooks/use-timer";

export const SynthRepeatUp: FC = () => {
  const handle =
  useMidisSequenceIncrementer('repeat');
  const [isLoading, handleStart] =
    useTimer(100, handle.up);
  return (
    <PillBXs
      title="Repeat +1"
      Icon={
        isLoading
          ? IconsLoader
          : IconsChevronsUp
      }
      onClick={handleStart}
    />
  );
};
