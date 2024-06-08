import {
  useEffect,
  useState,
} from "react";
import { useSoundContext } from "~/shell/global/sound";
import { useVideoPlayerStyle } from "~/pages/video/player/style";
import { usePlaySequences } from "~/pages/video/music/playback/play-sequences";
import { PlayerBackground } from "~/pages/video/player/_background";
import { PlayerBackgroundOpaque } from "~/pages/video/player/_background/opaque";
import { boxRadius } from "~uno/rules/box/radius";
import { IconsPlay } from "~/components/icons/playback/play";
import { VideoMusicPlaybackTimer } from "~/pages/video/music/playback/timer";
import { PillBLayout } from "~/components/buttons/pill/b/layout";
import { useTimeoutRef } from "@brysonandrew/hooks-window";
import { useTrillPicsStore } from "~/store/middleware";
import { isDefined } from "~/utils/validation/is/defined";
import { NOOP } from "@brysonandrew/utils-function";
import clsx from "clsx";
import { useDownload } from "~/shell/global/sound/hooks/useDownload";
import { boxSize } from "~uno/rules/box/size";

export const VideoMusicPlayback =
  () => {
    const [isPlaying, setPlaying] =
      useState(false);
    const s = boxSize();
    const { timeoutRef, endTimeout } =
      useTimeoutRef();
    const play = usePlaySequences();
    const {
      stop,
      start,
      sound,
      audioUrl,
    } = useSoundContext();
    const { sequences, set } =
      useTrillPicsStore(
        ({ sequences, set }) => ({
          sequences,
          set,
        })
      );
    const download = useDownload();

    useEffect(() => {
      sound.recorder.onstop = (
        event: Event
      ) => {
        console.log(
          "sound.recorder.onstop "
        );
        console.dir(event);
        console.log(sound.chunks);
        const audioBlob = new Blob(
          sound.chunks,
          {
            type: "audio/webm",
          }
        );
        set({ audioBlob });

        download(audioBlob);

        console.log(
          `Recorder stopped: Recorded chunks: ${sound.chunks.length}`
        );
      };
    }, []);
    const isContent = sequences.some(
      (v) =>
        isDefined(v.activeButton) &&
        v.activeButton !== "none"
    );
    const { playerStyle } =
      useVideoPlayerStyle();

    const handleClick = async () => {
      endTimeout();
      setPlaying(true);
      console.log("PLAY");

      await play();
      start();

      timeoutRef.current = setTimeout(
        () => {
          setPlaying(false);
          stop();
        },
        8000
      );
      // if (
      //   sound.recorder.state ===
      //   "recording"
      // ) {
      //   console.log("STOP");
      //   stop();
      // } else {

      // }
    };
    const borderRadius = boxRadius();

    const title = "Save music";
    return (
      <div
        className="relative flex-col flex justify-center"
        style={{
          ...playerStyle,
        }}
      >
        <div
          className="relative row-space w-full"
          style={{
            paddingRight: `${s.m05}px`,
            borderRadius,
          }}
        >
          <PlayerBackgroundOpaque />
          <div
            className="absolute inset-0 _gradient-radial"
            style={{
              borderRadius,
            }}
          />
          <PlayerBackground />
          <div className="absolute inset-0 bg-black-05 rounded-lg _gradient-mesh opacity-60" />
          <button
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
          </button>
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

        {audioUrl && (
          <audio
            src={audioUrl}
            controls
          />
        )}
      </div>
    );
  };
