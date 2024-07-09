import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { IconsPlay } from "~/components/icons/playback/play";
import { useMusicPlay } from "~/hooks/music/play";
import { PillB } from "~/components/buttons/pill/b";
import { IconsStop } from "~/components/icons/playback/stop";

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const MusicControlsButtonsPlay: FC<
  TProps
> = () => {
  const musicPlay = useMusicPlay();
  return (
    <PillB
      title={`play ${"music"}`}
      Icon={
        musicPlay.isPlaying
          ? IconsStop
          : IconsPlay
      }
      onClick={musicPlay.play}
    />
  );
};
