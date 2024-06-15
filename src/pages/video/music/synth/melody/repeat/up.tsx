import type { FC } from "react";
import { PillBSm } from "~/components/buttons/pill/b/sm";
import { IconsChevronsUp } from "~/components/icons/chevrons/up";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisInc } from "~/hooks/music/midis/interval";
import { useTimer } from "~/hooks/use-timer";

export const SynthRepeatUp: FC = () => {
  const handle =
  useMidisInc('repeat');
  const [isLoading, handleStart] =
    useTimer(100, handle.up);
  return (
    <PillBSm
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
