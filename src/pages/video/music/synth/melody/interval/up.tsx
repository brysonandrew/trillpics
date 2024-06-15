import type { FC } from "react";
import { PillBSm } from "~/components/buttons/pill/b/sm";
import { IconsChevronsUp } from "~/components/icons/chevrons/up";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisInc } from "~/hooks/music/midis/interval";
import { useTimer } from "~/hooks/use-timer";

export const SynthIntervalUp: FC = () => {
  const handle =
    useMidisInc('interval');
  const [isLoading, handleStart] =
    useTimer(100, handle.up);
  return (
    <PillBSm
      title="Interval +1"
      Icon={
        isLoading
          ? IconsLoader
          : IconsChevronsUp
      }
      onClick={handleStart}
    />
  );
};
