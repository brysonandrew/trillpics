import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { PillB } from "~/components/buttons/pill/b";
import { boxSize } from "~uno/rules/box/size";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { IconsLoader } from "~/components/icons/loader";
import { IconsSave } from "~/components/icons/save";
import { IconsTick } from "~/components/icons/tick";

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const MusicRecord: FC<
  TProps
> = () => {
  const s = boxSize();
  const {
    isRecording,
    isCooldown,
    handleStart,
  } = useMusicRecorderContext();
  return (
    <PillB
      title={`play ${"music"}`}
      Icon={
        isRecording
        ? IconsLoader
        : isCooldown
        ? IconsTick
        : IconsSave
      }
      onClick={handleStart}
    />
  );
};
