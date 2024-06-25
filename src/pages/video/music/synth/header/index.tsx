import { FC } from "react";
import { MusicLayoutHeader } from "~/pages/video/music/layout/header";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { TimerDisplayHeader } from "~/components/playback/timer/display/header";
import { useHeaderPlay } from "~/pages/video/music/layout/header/play";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { VideoMusicSynthHeaderNote } from "~/pages/video/music/synth/header/note";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const VideoMusicSynthHeader: FC =
  () => {
    const midis = usePlayMidis();
    const play = useHeaderPlay(midis);
const {schedule:{record}} = useMusicRefs()
    // const { schedule } = useTrillPicsStore(
    //   ({ schedule }) => ({ schedule })
    // );

    const audioSeconds =
      useAudioSeconds();
    return (
      <MusicLayoutHeader
        {...play}
        leftContent={
          <>
            <TimerDisplayHeader
              stepsCount={record.steps.length}
              isActive={midis.isPlaying}
              seconds={audioSeconds}
              progressKey="midis"
              isCooldown={
                midis.isCooldown
              }
            />
          </>
        }
        rightContent={
          <div className="row grow w-full">
            <LinesHorizontalLight />
            <VideoMusicSynthHeaderNote />
            <LinesHorizontalLight />
          </div>
        }
      >
        Synth
      </MusicLayoutHeader>
    );
  };
