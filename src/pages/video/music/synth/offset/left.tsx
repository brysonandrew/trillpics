import type { FC } from "react";
import { PillB } from "~/components/buttons/pill/b";
import { IconsChevronsLeft } from "~/components/icons/chevrons/left";
import { IconsLoader } from "~/components/icons/loader";
import { useMusicMidisPatternsOffset } from "~/hooks/music/midis/patterns/offset";
import { useTimer } from "~/hooks/use-timer";

export const SynthOffsetLeft: FC =
  () => {
    const handle =
      useMusicMidisPatternsOffset();
    const [isLoading, handleStart] =
      useTimer(100, handle.left);
    return (
      <PillB
        title="Offset Left"
        Icon={
          isLoading
            ? IconsLoader
            : IconsChevronsLeft
        }
        onClick={handleStart}
      ></PillB>
    );
  };
