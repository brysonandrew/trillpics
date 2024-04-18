import {FC} from 'react';
import {useShallow} from 'zustand/react/shallow';
import { useVideoStore } from '@/store';
import { useCurrentPlayerFrame } from '@/remotion/hooks/use-current-player-frame';
import { TimerDisplay } from '@/remotion/player/playback/timer/display';

export const PlaybackTimer: FC = () => {
  const {durationInFrames} = useVideoStore(
    useShallow(({durationInFrames}) => ({
      durationInFrames,
    }))
  );
  const currentFrame = useCurrentPlayerFrame();
  return (
    <div className="relative flex shrink-0 grow-0 items-center text-left">
      <TimerDisplay frame={currentFrame} />
      <div className="flex items-center">
        <span className="px-1">/</span>
        <TimerDisplay frame={durationInFrames} />
      </div>
    </div>
  );
};
