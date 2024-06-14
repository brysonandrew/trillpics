import type { FC } from "react";
import { PillB } from "~/components/buttons/pill/b";
import { PillBHoverSm } from "~/components/buttons/pill/b/hover/sm";
import { IconsChevronsRight } from "~/components/icons/chevrons/right";
import { IconsLoader } from "~/components/icons/loader";
import { useMusicMidisPatternsOffset } from "~/hooks/music/midis/patterns/offset";
import { useTimer } from "~/hooks/use-timer";

export const SynthOffsetRight: FC =
  () => {
    const handle =
      useMusicMidisPatternsOffset();
    const [isLoading, handleStart] =
      useTimer(100, handle.right);
    return (
      <PillB
        title="Offset Right"
        Icon={
          isLoading
            ? IconsLoader
            : IconsChevronsRight
        }
        direction="rtl"
        onClick={handleStart}
      >
      </PillB>
    );
  };
