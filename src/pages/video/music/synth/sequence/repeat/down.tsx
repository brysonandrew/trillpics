import type { FC } from "react";
import { PillBXs } from "~/components/buttons/pill/b/xs";
import { IconsChevronsDown } from "~/components/icons/chevrons/down";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisSequenceIncrementer } from "~/pages/video/music/synth/incrementer/hook";
import { useTimer } from "~/hooks/use-timer";

export const SynthRepeatDown: FC =
  () => {
    const handle =
      useMidisSequenceIncrementer('repeat');
    const [isLoading, handleStart] =
      useTimer(100, handle.down);
    return (
      <PillBXs
        title="Repeat Down"
        Icon={
          isLoading
            ? IconsLoader
            : IconsChevronsDown
        }
        onClick={handleStart}
      />
    );
  };
