import { STEPS_COUNT } from "~/constants/music/steps";
import { resolveStepsPerSecond } from "~/hooks/music/time/resolver";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { supportedMimeTypes } from "~/pages/video/music/_context/hooks/recorder/supportedMimeTypes";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useTrillPicsStore } from "~/store/middleware";

type TConfig = any;
export const useLoopHandler = (
  config: TConfig
) => {
  const { set, bpm } =
    useTrillPicsStore(
      ({ set, bpm }) => ({
        set,
        bpm,
      })
    );
  const seconds =
    usePicVideoReadSeconds();

  const { audio } =
    useMusicInitContext();

  const handler = () => {
    const sps =
      resolveStepsPerSecond(bpm);
    const spb = STEPS_COUNT * sps;
    const barsReq = Math.floor(
      seconds / spb
    );
    const barsRemainder = seconds % spb;
    console.log(barsReq, barsRemainder);
    const fulls = [
      ...Array(barsReq),
    ].reduce(
      (a) => [...a, ...audio.chunks],
      []
    );

    const size = audio.chunks.length;
    const partial = Math.ceil(
      (barsRemainder / spb) * size
    );
    const r = audio.chunks.slice(
      0,
      partial
    );

    const audioBlob = new Blob(
      [...fulls, ...r],
      {
        type:
          supportedMimeTypes()[0] ??
          "recording/webm",
        //,
      }
    );

    return audioBlob;
  };

  return handler;
};
