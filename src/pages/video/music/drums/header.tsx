import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsStop } from "~/components/icons/playback/stop";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { RowsBeats } from "~/pages/video/music/drums/beats";
import { DrumsPresets } from "~/pages/video/music/drums/presets";
import { MusicLayoutHeader } from "~/pages/video/music/header";

export const MusicLayoutDrums: FC =
  () => {
    const beats = usePlayBeats();
    return (
      <MusicLayoutHeader
        Icon={
          beats.isPlaying
            ? IconsStop
            : IconsPlay
        }
        onClick={() => {
          if (beats.isPlaying) {
            beats.stop();
          } else {
            beats.play();
          }
        }}
        leftContent={<DrumsPresets />}
        rightContent={<RowsBeats />}
      >
        Drums
      </MusicLayoutHeader>
    );
  };
