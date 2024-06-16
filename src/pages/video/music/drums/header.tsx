import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsStop } from "~/components/icons/playback/stop";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { RowsBeats } from "~/pages/video/music/drums/beats";
import { DrumsPresets } from "~/pages/video/music/drums/presets";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { usePlaybackSchedule } from "~/pages/video/music/header/playback-schedule";
import { VideoMusicHeaderTimer } from "~/pages/video/music/header/timer";
import { useMusicRecorderContext } from "~/pages/video/music/_context/recorder";
import { boxSize } from "~uno/rules/box/size";

export const MusicLayoutDrums: FC =
  () => {
    const beats = usePlayBeats();
    const { audioSeconds } =
      useMusicRecorderContext();
    const s = boxSize();
    const midis = usePlayMidis();
    const stop = midis.stop;
    const { start } =
      usePlaybackSchedule({ stop });
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
        leftContent={
          <VideoMusicHeaderTimer
            seconds={audioSeconds}
            isActive={beats.isPlaying}
          />
        }
        rightContent={
          <>
            <LinesHorizontal />

            <DrumsPresets />
            <RowsBeats />
          </>
        }
      >
        Drums
      </MusicLayoutHeader>
    );
  };
