import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { PillB } from "~/components/buttons/pill/b";
import { IconsLoop } from "~/components/icons/loop";
import { useContextMusicRecorder } from "~/pages/video/music/_context/recorder";

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const MusicControlsButtonsLoop: FC<
  TProps
> = () => {
  const { isRecording } =
    useContextMusicRecorder();

  const isLoop = true
  const handleClick = () => {
console.log("LOOP")
  };
  return (
    <PillB
      title={`loop ${"music"}`}
      disabled={isRecording}
      classValue={
        isLoop
          ? "brightness-120"
          : "brightness-70 grayscale-40"
      }
      Icon={IconsLoop}
      onClick={handleClick}
    />
  );
};
