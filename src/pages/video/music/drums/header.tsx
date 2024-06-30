import type { FC } from "react";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { TimerDisplayHeader } from "~/components/playback/timer/display/header";
import { STEPS_COUNT } from "~/constants/music/timing";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { DrumsPresets } from "~/pages/video/music/drums/presets";
import { MusicLayoutHeader } from "~/pages/video/music/layout/header";
import { useHeaderPlay } from "~/pages/video/music/layout/header/play";

export const MusicLayoutDrums: FC =
  () => {
    const beats = usePlayBeats();
    const audioSeconds =
      useAudioSeconds();
    const play = useHeaderPlay(beats);
    return (
      <MusicLayoutHeader
        {...play}
        leftContent={
          <TimerDisplayHeader
            isActive={beats.isPlaying}
            stepsCount={STEPS_COUNT}
            seconds={audioSeconds}
            progressKey="beats"
            isCooldown={
            false
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
