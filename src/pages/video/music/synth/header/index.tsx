import { FC } from "react";
import { MusicLayoutHeader } from "~/pages/video/music/layout/header";
import { useTrillPicsStore } from "~/store/middleware";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { TimerDisplayHeader } from "~/components/playback/timer/display/header";
import { useHeaderPlay } from "~/pages/video/music/layout/header/play";
import { usePlayMidis } from "~/hooks/music/play/midis";

export const VideoMusicSynthHeader: FC =
  () => {
    const midis = usePlayMidis();
    const play = useHeaderPlay(midis);

    const { steps } = useTrillPicsStore(
      ({ steps }) => ({ steps })
    );

    const audioSeconds =
      useAudioSeconds();
    return (
      <MusicLayoutHeader
        {...play}
        leftContent={
          <TimerDisplayHeader
            stepsCount={steps.length}
            isActive={midis.isPlaying}
            seconds={audioSeconds}
            progressKey="midis"
            isCooldown={
              midis.isCooldown
            }
          />
        }
        rightContent={
          <LinesHorizontalLight />
        }
      >
        Synth
      </MusicLayoutHeader>
    );
  };
