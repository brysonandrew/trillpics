import {
  FC,
  useState,
  useRef,
} from "react";
import { useEventListener } from "@brysonandrew/hooks-events";
import { useEffectReset } from "~/pages/video/music/audio/uploaded/item/effect-reset";
import { AudioUploadedItemLeft } from "~/pages/video/music/audio/uploaded/item/left";
import { AudioUploadedItemProgress } from "~/pages/video/music/audio/uploaded/item/progress";
import { TAudioStatus } from "~/pages/video/music/audio/uploaded/item/types";
import { useDuration } from "~/pages/video/music/audio/uploaded/item/use-duration";
import { isNull } from "~/utils/validation/is/null";
import { TypographySm } from "~/components/layout/typography/sm";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { box } from "~uno/rules/box";
import { AudioUploadedItemTimer } from "~/pages/video/music/audio/uploaded/item/progress/timer";

type TProps = {
  name: string;
  src: string;
  children(
    elapsed: number
  ): JSX.Element;
};
export const AudioUploadedItem: FC<
  TProps
> = ({ name, src, children }) => {
  const [
    uploadedAudioPlayingKey,
    setUploadedAudioPlayingKey,
  ] = useState<string | null>(null);

  const [status, setStatus] =
    useState<TAudioStatus>("idle");
  const [elapsed, setElapsed] =
    useState(0);
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null
    );
  const duration =
    useDuration(audioRef);

  const isPlaying =
    src === uploadedAudioPlayingKey;

  const handlePlay = async () => {
    if (audioRef.current === null)
      return;
    await audioRef.current.play();
    setUploadedAudioPlayingKey(src);
  };

  const handlePause = () => {
    if (
      uploadedAudioPlayingKey === src
    ) {
      setUploadedAudioPlayingKey(null);
    }
    if (audioRef.current === null)
      return;
    audioRef.current.pause();
  };

  const reset = () => {
    handlePause();
    if (audioRef.current === null)
      return;
    audioRef.current.currentTime = 0;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current === null)
      return;
    setElapsed(
      audioRef.current.currentTime
    );
  };

  const handleSeek = (
    progress: number
  ) => {
    if (isNull(duration)) {
      console.log(
        "Duration not available"
      );
      return;
    }
    const elapsed = Math.floor(
      progress * duration
    );
    if (audioRef.current === null)
      return;
    audioRef.current.currentTime =
      elapsed;
    setElapsed(elapsed);
  };

  const handleCanPlay = () => {
    setStatus("ready");
  };

  const handleEnded = () => {
    reset();
  };

  const handleError = async (
    event: ErrorEvent
  ) => {
    setStatus("error");
  };

  useEventListener<
    "canplay",
    HTMLAudioElement
  >("canplay", handleCanPlay, audioRef);

  useEventListener<
    "timeupdate",
    HTMLAudioElement
  >(
    "timeupdate",
    handleTimeUpdate,
    audioRef
  );

  useEventListener<
    "ended",
    HTMLAudioElement
  >("ended", handleEnded, audioRef);

  useEventListener<
    "error",
    HTMLAudioElement
  >("error", handleError, audioRef);

  useEffectReset({
    reset,
    audioRef,
    src,
    uploadedAudioPlayingKey,
  });

  return (
    <>
      {children(elapsed)}
      <div
        className="relative column-stretch w-full"
        style={{
          gap: box._0125,
        }}
      >
        <audio
          className="opacity-0"
          ref={audioRef}
          src={src}
        />
        <header className="row-space w-full">
          <TypographySm classValue="leading-20 text-left font-normal truncate pointer-events-none">
            {name}
          </TypographySm>
          <AudioUploadedItemTimer
            elapsed={elapsed}
          />
        </header>

        <div className="flex items-center w-full">
          <AudioUploadedItemLeft
            status={status}
            isPlaying={isPlaying}
            onPause={handlePause}
            onPlay={handlePlay}
          />
          <div className="w-2 shrink-0" />
          {
            <>
              {status === "error" ? (
                <TypographyXxxs classValue="text-xs p-0.5 rounded-md text-red pointer-events-none">
                  Most likely resource
                  has expired. Click
                  here to delete
                </TypographyXxxs>
              ) : (
                <>
                  {!isNull(
                    duration
                  ) && (
                    <AudioUploadedItemProgress
                      elapsed={elapsed}
                      duration={
                        duration
                      }
                      onSeek={
                        handleSeek
                      }
                    />
                  )}
                </>
              )}
            </>
          }
        </div>
      </div>
    </>
  );
};
