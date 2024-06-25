import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { PillB } from "~/components/buttons/pill/b";
import { IconsLoop } from "~/components/icons/loop";
import { useTrillPicsStore } from "~/store/middleware";
import { TState } from "~/store/types";
import { useContextMusicRecorder } from "~/pages/video/music/_context/recorder";

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const MusicControlsButtonsLoop: FC<
  TProps
> = () => {
  const { isRecording } =
    useContextMusicRecorder();
  // const { set, bpm, isLoop, sequence } =
  //   useTrillPicsStore(
  //     ({
  //       set,
  //       bpm,
  //       isLoop,
  //       sequence,
  //     }) => ({
  //       set,
  //       bpm,
  //       isLoop,
  //       sequence,
  //     })
  //   );
  
  const handleClick = () => {
    // set((draft: TState) => {
    //   draft.isLoop = !draft.isLoop;
    // });
  };
  return (
    <PillB
      title={`loop ${"music"}`}
      disabled={isRecording}
      // classValue={
      //   isLoop
      //     ? "brightness-120"
      //     : "brightness-70 grayscale-40"
      // }
      Icon={IconsLoop}
      onClick={handleClick}
    />
  );
};
