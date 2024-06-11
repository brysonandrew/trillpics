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
import { MusicRowsLayout } from "~/pages/video/music/rows/layout";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";

export const VideoMusicPlayback =
  () => {
    // const [isPlaying, setPlaying] =
    //   useState(false);
    const s = boxSize();

    const play = usePlaySequences();
    const {
      audioSrc,
      stop,
      start,
      sound,
      saveProgress,
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
    const {
      trigger: trigger1,
      isArmed: isCoolingDown,
    } = useTimebomb(seconds * 1000);

    const {
      trigger,
      isArmed: isPlaying,
    } = useTimebomb(
      seconds * 1000,
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
    const { playerStyle } =
      useVideoPlayerStyle();

    const handleClick = async () => {
      trigger();
      console.log("PLAY");
      await play();
      start();
    };
    const borderRadius = boxRadius();
    const borderRadiusM =
      boxRadius("m");

    const title = "Play sequence";

    return (
      <button
        title={title}
        className="relative flex-col flex justify-center"
        style={{
          ...playerStyle,
        }}
        onClick={
          isContent && !isPlaying
            ? handleClick
            : NOOP
        }
      >
        <div
          className="relative row-space w-full px-1.5"
          style={{
            borderRadius,
          }}
        >
          <PlayerBackgroundOpaque />

          <div
            className="absolute inset-0 _gradient-radial opacity-50"
            style={{
              borderRadius:
                borderRadiusM,
            }}
          >
            <PlayerBackground />

            <TimerCurrentProgress
              progress={saveProgress}
              borderRadiusSize="l"
              classValue="inset-y-0 inset-x-0"
            />
          </div>
          <div
            className="absolute inset-0 bg-black-05 _gradient-mesh opacity-60"
            style={{
              borderRadius:
                borderRadiusM,
            }}
          />
          <MusicRowsLayout>
            <IconsPlay
              classValue="-top-0.25 -left-0.25"
              size={18}
            />
            {title}
          </MusicRowsLayout>
          {/* <button
            title={title}
            className={clsx(
              "relative row",
              isContent
                ? "text-current"
                : "text-gray cursor-not-allowed grayscale-100"
            )}
            onClick={
              isContent
                ? handleClick
                : NOOP
            }
            disabled={!isContent}
            style={{ gap: s.m05 }}
          >
            <PillBLayout
              Icon={IconsPlay}
            />
            <div className="relative uppercase pt-1 font-slab">
              {title}
            </div>
          </button> */}
          {isContent ? (
            <div className="py-1 center">
              <VideoMusicPlaybackTimer
                isPlaying={isPlaying}
              />
            </div>
          ) : (
            <p className="relative font-slab px-4">
              No audio content selected.
            </p>
          )}
        </div>
        <div
          className="row uppercase font-sans"
          style={{
            gap: s.m025,
          }}
        >
          {isPlaying ||
          isCoolingDown ? (
            <>
              <IconsSave />
              <div className="text-xs">
                {isPlaying
                  ? "Saving... Please wait until the audio is done playing."
                  : isCoolingDown
                  ? "Saved"
                  : null}
              </div>
            </>
          ) : audioSrc === null ? (
            <>
              <IconsAlert />
              <div className="text-xs">
                To save your changes you
                must play the audio from
                start to finish.
              </div>
            </>
          ) : null}
        </div>
      </button>
    );
  };
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  viewBox="0 0 24 24"
>
  <path fill="currentColor" />
</svg>;
