import {useEffect} from 'react';
import {useShallow} from 'zustand/react/shallow';
import { useVideoStore } from '@/store';

export const usePlayerListeners = () => {
  const {playerElement, updateState} = useVideoStore(
    useShallow(({playerElement, updateState}) => ({
      playerElement,
      updateState,
    }))
  );

  useEffect(() => {
    playerElement?.addEventListener('play', () => {
      updateState({isPlaying: true});
    });
    playerElement?.addEventListener('pause', () => {
      updateState({isPlaying: false});
    });

    return () => {
      playerElement?.removeEventListener('play', () => {
        updateState({isPlaying: true});
      });
      playerElement?.removeEventListener('pause', () => {
        updateState({isPlaying: false});
      });
    };
  }, [playerElement, updateState]);
};
