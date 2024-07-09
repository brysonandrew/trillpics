import { useEventListener } from '@brysonandrew/hooks-events';
import {MutableRefObject, useState} from 'react';

type TConfig = MutableRefObject<HTMLAudioElement|null>;
export const useDuration = (audioRef: TConfig) => {
  const [duration, setDuration] = useState<number|null>(null);

  const handleDurationChange = (_: HTMLElementEventMap['durationchange']) => {
    if (audioRef.current === null) return;
    setDuration(audioRef.current.duration);
  };
  useEventListener<'durationchange', HTMLAudioElement>(
    'durationchange',
    handleDurationChange,
    audioRef
  );

  return duration;
};
