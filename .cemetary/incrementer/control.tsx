import type { FC } from "react";
import { PillBXs } from "~/components/buttons/pill/b/xs";
import { IconsLoader } from "~/components/icons/loader";
import { useMidisSequenceIncrementer } from "~/pages/video/music/synth/incrementer/hook";
import { useTimer } from "~/hooks/use-timer";
import {
  TIncrementerControlProps,
  TIncrementType,
} from "~/pages/video/music/synth/incrementer/types";
import { kebabToPascal } from "~/utils/format";
import { TXyAxis } from "@brysonandrew/motion-config-types";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { IconsChevronsDown } from "~/components/icons/chevrons/down";
import { IconsChevronsLeft } from "~/components/icons/chevrons/left";
import { IconsChevronsRight } from "~/components/icons/chevrons/right";
import { IconsChevronsUp } from "~/components/icons/chevrons/up";

const ICONS: Record<
  TXyAxis,
  Record<
    TIncrementType,
    FC<TIconsSvgProps>
  >
> = {
  x: {
    down: IconsChevronsDown,
    up: IconsChevronsUp,
  },
  y: {
    down: IconsChevronsLeft,
    up: IconsChevronsRight,
  },
};

export const VideoMusicSynthIncrementerControl: FC<
  TIncrementerControlProps
> = ({
  isDisabled,
  name,
  type,
  direction,
}) => {
  const handle =
    useMidisSequenceIncrementer(name);
  const [isLoading, handleStart] =
    useTimer(100, handle[type]);
  return (
    <PillBXs
      title={`${kebabToPascal(
        name
      )} ${type==='down'?'-1':'+1'}`}
      disabled={isDisabled}
      Icon={
        isLoading
          ? IconsLoader
          : ICONS[direction][type]
      }
      onClick={
        isDisabled
          ? () => null
          : handleStart
      }
    />
  );
};
