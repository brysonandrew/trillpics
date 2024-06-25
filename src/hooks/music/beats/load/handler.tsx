import {
  BEATS_KEYS,
  BEATS_VERSION_LOOKUP,
} from "~/hooks/music/beats/constants";
import { useBufferFromSrcHandler } from "~/hooks/music/beats/hooks/buffer-from-source";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { resolveAudioSampleSrc } from "~/utils/src";

export const useBeatsLoadHandler =
  () => {
    const {
      audio: { context, drums },
    } = useMusicRefs();

    const handleBufferFromSrc =
      useBufferFromSrcHandler(context);

    const hendler = async () => {
      for await (const key of BEATS_KEYS) {
        const src =
          resolveAudioSampleSrc(
            key,
            BEATS_VERSION_LOOKUP[key]
          );
        const buffer =
          await handleBufferFromSrc(
            src
          );
        drums.bufferRecord[key] =
          buffer;
      }
    };

    return hendler;
  };
