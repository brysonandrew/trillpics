import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { RowsBeats } from "~/pages/video/music/drums/beats";
import { DrumsPresets } from "~/pages/video/music/drums/presets";
import { MusicLayoutHeader } from "~/pages/video/music/header";

export const MusicLayoutDrums: FC =
  () => {
    const beats = usePlayBeats();
    return (
      <MusicLayoutHeader
        Icon={IconsPlay}
        onClick={() => beats.play()}
        leftContent={<DrumsPresets />}
        rightContent={<RowsBeats />}
      >
        Drums
      </MusicLayoutHeader>
    );
  };
