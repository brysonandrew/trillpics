import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsStop } from "~/components/icons/playback/stop";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { STEPS_COUNT } from "~/constants/music/timing";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { RowsBeats } from "~/pages/video/music/drums/beats";
import { DrumsPresets } from "~/pages/video/music/drums/presets";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { VideoMusicHeaderTimer } from "~/pages/video/music/header/timer";

export const MusicLayoutDrums: FC =
  () => {
    const beats = usePlayBeats();
    const audioSeconds =
      useAudioSeconds();
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
            isActive={beats.isPlaying}
            stepsCount={STEPS_COUNT}
            seconds={audioSeconds}
            progressKey="beats"
            isCooldown={beats.isCooldown}

          />
        }
        rightContent={
          <>
            <LinesHorizontalLight />
            <DrumsPresets />
            <RowsBeats />
          </>
        }
      >
        Drums
      </MusicLayoutHeader>
    );
  };
