import {MutableRefObject, useEffect} from 'react';
import { isString } from '~/utils/validation/is/string';

type TConfig = {
  uploadedAudioPlayingKey: string | null;
  src: string;
  audioRef: MutableRefObject<HTMLAudioElement | null>;
  reset(): void;
};
export const useEffectReset = ({
  uploadedAudioPlayingKey,
  src,
  audioRef,
  reset,
}: TConfig) => {
  useEffect(() => {
    if (
      isString(uploadedAudioPlayingKey) &&
      uploadedAudioPlayingKey !== src &&
      audioRef.current !== null &&
      audioRef.current.currentTime > 0
    ) {
      reset();
    }
  }, [uploadedAudioPlayingKey]);
};
export type TUseEffectResetResult = ReturnType<typeof useEffectReset>;
