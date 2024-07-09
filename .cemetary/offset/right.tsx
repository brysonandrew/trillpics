import type { FC } from "react";
import { PillB } from "~/components/buttons/pill/b";
import { PillBHoverSm } from "~/components/buttons/pill/b/hover/sm";
import { PillBXs } from "~/components/buttons/pill/b/xs";
import { IconsChevronsRight } from "~/components/icons/chevrons/right";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisOffset } from "~/hooks/music/midis/offset";
import { useTimer } from "~/hooks/use-timer";

export const SynthOffsetRight: FC =
  () => {
    const handle =
      useMidisOffset();
    const [isLoading, handleStart] =
      useTimer(100, handle.right);
    return (
      <PillBXs
        title="Offset Right"
        Icon={
          isLoading
            ? IconsLoader
            : IconsChevronsRight
        }
        onClick={handleStart}
      />
    );
  };
