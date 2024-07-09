import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { PillB } from "~/components/buttons/pill/b";
import { useContextMusicRecorder } from "~/pages/video/music/_context/recorder";
import { IconsLoader } from "~/components/icons/loader";
import { IconsSave } from "~/components/icons/save";
import { IconsTick } from "~/components/icons/tick";

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const MusicControlsButtonsRecord: FC<
  TProps
> = ({ children }) => {
  const {
    isRecording,
    isCooldown,
    handleStart,
  } = useContextMusicRecorder();
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
    >
      {children}
    </PillB>
  );
};
