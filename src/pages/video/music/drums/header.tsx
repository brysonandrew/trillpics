import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { MusicLayoutHeader } from "~/pages/video/music/header";

export const MusicLayoutDrums: FC =
  () => {
    const beats = usePlayBeats();
    return (
      <MusicLayoutHeader
      Icon={IconsPlay}
        onClick={() => beats.play()}
      >
        Drums
      </MusicLayoutHeader>
    );
  };
