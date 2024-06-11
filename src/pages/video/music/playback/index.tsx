import {
  useEffect,
  useState,
} from "react";
import { progress } from "framer-motion";
import { useSoundContext } from "~/shell/global/sound";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { usePlaySequences } from "~/hooks/sound/play/sequences";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { boxRadius } from "~uno/rules/box/radius";
import {
  IconsPlay,
  IconsPlay24,
  IconsPlayLarge,
} from "~/components/icons/playback/play";
import { VideoMusicPlaybackTimer } from "~/pages/video/music/playback/timer";
import { PillBLayout } from "~/components/buttons/pill/b/layout";
import {
  useTimebomb,
  useTimeoutRef,
} from "@brysonandrew/hooks-window";
import { useTrillPicsStore } from "~/store/middleware";
import { isDefined } from "~/utils/validation/is/defined";
import { NOOP } from "@brysonandrew/utils-function";
import clsx from "clsx";
import { useDownload } from "~/shell/global/sound/hooks/useDownload";
import { boxSize } from "~uno/rules/box/size";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { IconsSave } from "~/components/icons/save";
import { SubtitleText } from "~/pics/header/subtitle/text";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { IconsArrowsLeft } from "~/components/icons/arrows/left";
import { IconsAlert } from "~/components/icons/alert";
import { isString } from "~/utils/validation/is/string";
import { MusicLayout } from "~/pages/video/music/layout";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { MusicBackground } from "~/pages/video/music/background";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { STEPS_COUNT } from "~/constants/music/steps";

export const VideoMusicPlayback =
  () => {
    // const [isPlaying, setPlaying] =
    //   useState(false);
    const s = boxSize();

    const play = usePlaySequences();
    const {
      audio,
      stop,
      start,
      sound,
      saveProgress,
      bpm,
    } = useSoundContext();
    const playBeats = usePlayBeats();
    const playMidis = usePlayMidis();
    const { set } = useTrillPicsStore(
      ({ set }) => ({
        set,
      })
    );

    const seconds =
      usePicVideoReadSeconds();

    const stepDuration =
      1 / (4 * (bpm / 60));

    const audioSeconds =
      stepDuration * STEPS_COUNT * 2;
    const {
      trigger: trigger1,
      isArmed: isCoolingDown,
    } = useTimebomb(
      audioSeconds * 1000
    );

    const {
      trigger,
      isArmed: isPlaying,
    } = useTimebomb(
      audioSeconds * 1000,
      () => {
        trigger1();
        stop();
      }
    );

    const isContent = true;
    // sequences.some(
    //   (v) =>
    //     isDefined(v.activeButton) &&
    //     v.activeButton !== "none"
    // );
    const {
      sidebarWidthOffset,
      width,
      screenHeight,
      sidebarWidth,
    } = useVideoPlayerStyle();

    const handleClick = async () => {
      trigger();
      console.log("PLAY");
      await playBeats();
      await playMidis.play();
      start();
    };
    const borderRadius = boxRadius();
    const borderRadiusM =
      boxRadius("m");

    const title = "Play sequence";

    return (
      <>
        <div
          className="relative row"
          style={{ gap: s.m05 }}
        >
          <MusicBackground
            boxStyle={{
              left: sidebarWidthOffset,
            }}
          />
          <MusicLayoutHeader
            onClick={handleClick}
          >
            Record
          </MusicLayoutHeader>
          {/* <LinesHorizontal/> */}
          <VideoMusicPlaybackTimer
            isPlaying={isPlaying}
            seconds={audioSeconds}
          />
          <LinesHorizontal />
        </div>

        <div
          className="relative row uppercase font-sans"
          style={{
            left:
              sidebarWidthOffset +
              s.m0125,
            gap: s.m025,
          }}
        >
          <MusicBackground
            boxStyle={{
              left: -s.m0125,
              width:
                width -
                sidebarWidth -
                s.m0125,
            }}
          />
          {isPlaying ||
          audio !== null ? (
            <>
              <IconsSave />
              <div className="text-xs">
                {isPlaying
                  ? "Saving... Please wait until the audio is done playing."
                  : isCoolingDown
                  ? "Your audio has been added"
                  : "Saved"}
              </div>
            </>
          ) : (
            <>
              <IconsAlert />
              <div className="text-xs">
                To save your changes you
                must play the audio from
                start to finish.
              </div>
            </>
          )}
        </div>
      </>
    );
  };
