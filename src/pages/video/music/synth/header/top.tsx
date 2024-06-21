import { FC, useRef } from "react";
import { usePlayMidis } from "~/hooks/music/play/midis";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { IconsPlay } from "~/components/icons/playback/play";
import { SynthReload } from "~/pages/video/music/synth/sequence/reload";
import { IconsStop } from "~/components/icons/playback/stop";
import { useTrillPicsStore } from "~/store/middleware";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { useAudioSeconds } from "~/hooks/music/time/audio-seconds";
import { TimerDisplayHeader } from "~/components/playback/timer/display/header";
import { usePlayBeats } from "~/hooks/music/play/beats";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useVideoStyle } from "~/pages/video/style";
import { PillB } from "~/components/buttons/pill/b";
import { IconsMenu } from "~/components/icons/menu";
import { PillBSm } from "~/components/buttons/pill/b/sm";
import { box } from "~uno/rules/box";

export const VideoMusicSynthHeaderTop: FC =
  () => {
    const midis = usePlayMidis();
    const { steps } = useTrillPicsStore(
      ({ steps }) => ({ steps })
    );
    const { scrollRef } =
      useMusicInitContext();
    const indexRef = useRef(0);
    const beats = usePlayBeats();
    const s = box;
    const { beatsTop, y, left } =
      useVideoStyle();
    const handleClick = () => {
      if (!scrollRef.current) return;
      const scrollTopOptions = [
        0,
        beatsTop,
        scrollRef.current.scrollHeight,
      ];
      const nextScrollTop =
        scrollTopOptions[
          indexRef.current %
            scrollTopOptions.length
        ];
      scrollRef.current.scrollTop =
        nextScrollTop;
      indexRef.current++;
      //scrollRef.current.scrollHeight;
    };

    const audioSeconds =
      useAudioSeconds();
    return (
      <MusicLayoutHeader
        Icon={
          midis.isPlaying
            ? IconsStop
            : IconsPlay
        }
        onClick={() => {
          if (midis.isPlaying) {
            midis.stop();
          } else {
            midis.play();
          }
        }}
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
          <>
            <LinesHorizontalLight />
            <PillB
              style={{
                position: "fixed",
                top:
                  y + s.m025 ,
                right: left,
              }}
              title="open menu"
              Icon={IconsMenu}
              onClick={handleClick}
            />
          </>
        }
      >
        Synth
      </MusicLayoutHeader>
    );
  };
