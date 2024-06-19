import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { IconsPlay } from "~/components/icons/playback/play";
import { useMusicPlay } from "~/hooks/music/play";
import { PillB } from "~/components/buttons/pill/b";
import { IconsStop } from "~/components/icons/playback/stop";
import { boxSize } from "~uno/rules/box/size";
import { IconsLoop } from "~/components/icons/loop";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const AllMusicLoop: FC<
  TProps
> = () => {
  const { isRecording } =
    useMusicRecorderContext();
  const { set, bpm, isLoop, sequence } =
    useTrillPicsStore(
      ({
        set,
        bpm,
        isLoop,
        sequence,
      }) => ({
        set,
        bpm,
        isLoop,
        sequence,
      })
    );
  const s = boxSize();
  const handleClick = () => {
    set((draft: TState) => {
      draft.isLoop = !draft.isLoop;
    });
  };
  return (
    <PillB
      title={`loop ${"music"}`}
      disabled={isRecording}
      classValue={
        isLoop
          ? "brightness-110"
          : "brightness-80 grayscale-20 opacity-60"
      }
      Icon={IconsLoop}
      onClick={handleClick}
    />
  );
};
