import type { FC } from "react";
import { IconsPlay } from "~/components/icons/playback/play";
import { IconsStop } from "~/components/icons/playback/stop";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { TimerDisplayHeader } from "~/components/playback/timer/display/header";
import { STEPS_COUNT } from "~/constants/music/timing";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { DrumsPresets } from "~/pages/video/music/beats/presets";
import { MusicLayoutHeader } from "~/pages/video/music/header";

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
          <TimerDisplayHeader
            isActive={beats.isPlaying}
            stepsCount={STEPS_COUNT}
            seconds={audioSeconds}
            progressKey="beats"
            isCooldown={
              beats.isCooldown
            }
          />
        }
        rightContent={
          <>
            <LinesHorizontalLight />
            <DrumsPresets />
        
          </>
        }
      >
        Drums
      </MusicLayoutHeader>
    );
  };
