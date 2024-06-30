import { FC } from "react";
import { MusicLayoutHeader } from "~/pages/video/music/layout/header";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { useHeaderPlay } from "~/pages/video/music/layout/header/play";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { SynthMode } from "~/pages/video/music/synth/mode";
import { SequenceNumbersBpm } from "~/pages/video/music/synth/composition/sequence/numbers/bpm";
import { box } from "~uno/rules/box";

export const VideoMusicSynthHeader: FC =
  () => {
    const midis = usePlayMidis();
    const play = useHeaderPlay(midis);
    return (
      <MusicLayoutHeader
        {...play}
        rightContent={
          <div className="row grow w-full">
            <LinesHorizontalLight />

            <div
              // style={{ width: box.m8 }}
            >
              <SequenceNumbersBpm />
            </div>
            <LinesHorizontalLight
              style={{ width: box.m }}
            />

            {/* <VideoMusicSynthHeaderNote /> */}
            <SynthMode />
          </div>
        }
      >
        Synth
      </MusicLayoutHeader>
    );
  };
{
  /* <TimerDisplayHeader
            stepsCount={
              record.steps.length
            }
            isActive={midis.isPlaying}
            seconds={audioSeconds}
            progressKey="midis"
            isCooldown={false}
          /> */
}
