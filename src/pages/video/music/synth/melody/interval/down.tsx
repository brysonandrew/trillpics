import type { FC } from "react";
import { PillBSm } from "~/components/buttons/pill/b/sm";
import { IconsChevronsDown } from "~/components/icons/chevrons/down";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisInc } from "~/hooks/music/midis/interval";
import { useTimer } from "~/hooks/use-timer";

export const SynthIntervalDown: FC =
  () => {
    const handle =
      useMidisInc('interval');
    const [isLoading, handleStart] =
      useTimer(100, handle.down);
    return (
      <PillBSm
        title="Interval Down"
        Icon={
          isLoading
            ? IconsLoader
            : IconsChevronsDown
        }
        onClick={handleStart}
      />
    );
  };
