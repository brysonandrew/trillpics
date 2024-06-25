import { STEPS_COUNT } from "~/constants/music/timing";
import { useBpm } from "~/hooks/music/bpm";
import { resolveStepsPerSecond } from "~/hooks/music/time/steps-per-second/resolver";
import { usePicVideoReadSeconds } from "~/hooks/pic/video/read/seconds/hook";
import { supportedMimeTypes } from "~/pages/video/music/_context/hooks/recorder/supportedMimeTypes";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const useLoopHandler = () => {
  const bpm = useBpm();

  const seconds =
    usePicVideoReadSeconds();

  const { audio:{save} } =
    useMusicRefs();

  const handler = () => {
    const sps =
      resolveStepsPerSecond(bpm);
    const spb = STEPS_COUNT * sps;
    const barsReq = Math.floor(
      seconds / spb
    );
    const barsRemainder = seconds % spb;

    const fulls = [
      ...Array(barsReq),
    ].reduce(
      (a) => [...a, ...save.chunks],
      []
    );

    const size = save.chunks.length;
    const partial = Math.ceil(
      (barsRemainder / spb) * size
    );
    const r = save.chunks.slice(
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
