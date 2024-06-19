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

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const MusicPlay: FC<
  TProps
> = () => {
  const s = boxSize();
  const musicPlay = useMusicPlay();
  const handleClick = () => {
    if (musicPlay.isPlaying) {
      musicPlay.stop();
    } else {
      musicPlay.play();
    }
  };
  return (
    <PillB
      title={`play ${"music"}`}
      Icon={
        musicPlay.isPlaying
          ? IconsStop
          : IconsPlay
      }
      onClick={handleClick}
    />
  );
};
