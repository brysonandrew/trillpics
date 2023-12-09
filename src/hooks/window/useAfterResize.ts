import { useEventListener } from '@hooks/events/useEventListener';
import {
  useEffect,
  useRef,
  useState,
} from 'react';

const DEBOUNCE_DELAY = 400;

export const useAfterResize = (
  callback: (e: Event) => void,
) => {
  const [isResizing, setResizing] =
    useState<boolean>(false);
  const timerRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    [],
  );

  const handleResize = (
    event: Event,
  ) => {
    setResizing(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(
      () => {
        callback(event);
        setResizing(false);
      },
      DEBOUNCE_DELAY,
    );
  };

  useEventListener(
    'resize',
    handleResize,
  );

  return isResizing;
};
