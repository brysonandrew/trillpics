import {
  BEATS_KEYS,
  DEFAULT_VERSION_LOOKUP,
} from "~/hooks/music/beats/constants";
import { useBufferFromSrcHandler } from "~/hooks/music/beats/hooks/buffer-from-source";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { resolveAudioSampleSrc } from "~/utils/src";

export const useBeatsLoadHandler = () => {
  const { context, bufferRecord } =
    useMusicInitContext();

  const handleBufferFromSrc =
    useBufferFromSrcHandler(context);

  const hendler = async () => {
    for await (const key of BEATS_KEYS) {
      const src = resolveAudioSampleSrc(
        key,
        DEFAULT_VERSION_LOOKUP[key]
      );
      const buffer =
        await handleBufferFromSrc(src);
      bufferRecord[key] = buffer;
    }
  };

  return hendler;
};
