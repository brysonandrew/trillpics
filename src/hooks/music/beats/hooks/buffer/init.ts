import {
  useEffect,
  useState,
} from "react";
import { resolveAudioSampleSrc } from "~/utils/src";
import { useBufferFromSrcHandler } from "~/hooks/music/beats/hooks/buffer-from-source";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { TBeatsKey } from "~/hooks/music/beats/types";

export const useBufferInit = (
  key: TBeatsKey,
  version: number
) => {
  const { context, bufferRecord } =
    useContextMusicInit();
  const [isReady, setReady] =
    useState(false);
  const handleSample =
    useBufferFromSrcHandler(context);
  const handler = async () => {
    const sampleBuffer =
      await handleSample(
        resolveAudioSampleSrc(
          key,
          version
        )
      );
    bufferRecord[key] = sampleBuffer;
    setReady(true);
  };
  useEffect(() => {
    handler();
  }, []);
  return isReady;
};
