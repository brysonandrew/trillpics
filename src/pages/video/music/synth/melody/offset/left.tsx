import type { FC } from "react";
import { PillBSm } from "~/components/buttons/pill/b/sm";
import { IconsChevronsLeft } from "~/components/icons/chevrons/left";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisOffset } from "~/hooks/music/midis/offset";
import { useTimer } from "~/hooks/use-timer";

export const SynthOffsetLeft: FC =
  () => {
    const handle = useMidisOffset();
    const [isLoading, handleStart] =
      useTimer(100, handle.left);
    return (
      <PillBSm
        title="Offset Left"
        Icon={
          isLoading
            ? IconsLoader
            : IconsChevronsLeft
        }
        onClick={handleStart}
      />
    );
  };
