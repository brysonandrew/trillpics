import { useSoundContext } from "~/shell/global/sound";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { VideoMusicPlaybackTimer } from "~/pages/video/music/playback/timer";
import { useTimebomb } from "@brysonandrew/hooks-window";
import { boxSize } from "~uno/rules/box/size";
import { IconsSave } from "~/components/icons/save";
import { IconsAlert } from "~/components/icons/alert";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { usePlayMidis } from "~/hooks/sound/play/midis";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { MusicBackground } from "~/pages/video/music/background";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { STEPS_COUNT } from "~/constants/music/steps";
import { IconsTick } from "~/components/icons/tick";
import { IconsLoader } from "~/components/icons/loader";
import { TimerCurrentProgress } from "~/pages/video/player/_controls/playback/progress";
import { IconsVideo } from "~/components/icons/video/video";

export const VideoMusicPlayback =
  () => {
    const s = boxSize();

    const {
      audio,
      stop,
      start,
      bpm,
      saveProgress,
    } = useSoundContext();
    const playBeats = usePlayBeats();
    const playMidis = usePlayMidis();

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
      async () => {
        playBeats.stop();
        playMidis.stop();
        trigger1();
        stop();
      }
    );

    const {
      sidebarWidthOffset,
      width,
      sidebarWidth,
    } = useVideoPlayerStyle();

    const handleClick = async () => {
      trigger();
      console.log("PLAY");
      await playBeats.play();
      await playMidis.play();
      start();
    };

    return (
      <>
        <div
          className="relative row"
          style={{ gap: s.m05 }}
        >
          <div
            className="absolute h-4 left-0"
            style={{
              width:
                width + s.m4 + s.m15,
              left: s.m + s.m0125,
            }}
          >
            <TimerCurrentProgress
              progress={saveProgress}
            />
          </div>
          <MusicBackground
            boxStyle={{
              left: sidebarWidthOffset,
            }}
          />
          <MusicLayoutHeader
            Icon={
              isPlaying
                ? IconsLoader
                : isCoolingDown
                ? IconsTick
                : IconsSave
            }
            onClick={handleClick}
          >
            Record
          </MusicLayoutHeader>
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
              <div
                className="row relative text-xs"
                style={{
                  gap: s.m0125 ,
                  left: s.m0125,
                }}
              >
                {isPlaying ? (
                  <>
                    <IconsSave />{" "}
                    <span>
                      Saving... Please
                      wait until the
                      audio is done
                      playing.
                    </span>
                  </>
                ) : isCoolingDown ? (
                  <>
                    <IconsSave />{" "}
                    <span>
                      Your audio has
                      been saved
                    </span>
                  </>
                ) : (
                  <>
                    <IconsVideo />{" "}
                    <span>
                      Your video now has
                      audio
                    </span>
                  </>
                )}
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
