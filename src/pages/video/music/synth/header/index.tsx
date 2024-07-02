import { FC } from "react";
import { MusicLayoutHeader } from "~/pages/video/music/layout/header";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { useHeaderPlay } from "~/pages/video/music/layout/header/play";
import { usePlayMidis } from "~/hooks/music/play/midis";

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
