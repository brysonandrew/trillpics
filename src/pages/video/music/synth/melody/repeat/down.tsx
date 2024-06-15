import type { FC } from "react";
import { PillBSm } from "~/components/buttons/pill/b/sm";
import { IconsChevronsDown } from "~/components/icons/chevrons/down";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisInc } from "~/hooks/music/midis/interval";
import { useTimer } from "~/hooks/use-timer";

export const SynthRepeatDown: FC =
  () => {
    const handle =
      useMidisInc('repeat');
    const [isLoading, handleStart] =
      useTimer(100, handle.down);
    return (
      <PillBSm
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
