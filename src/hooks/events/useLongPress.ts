import { useEventListener } from '@hooks/events/useEventListener';
import { useTimeoutRef } from '@hooks/window/useTimeoutRef';
import { useRef } from 'react';

export const useLongPress = (callback: () => any) => {
  const { timeoutRef, endTimeout } = useTimeoutRef();
  const ref = useRef<HTMLElement | null>(null);

  const handler = (event: TouchEvent) => {
    event.preventDefault();
  };

  useEventListener<'touchstart', HTMLElement>(
    'touchstart',
    () => {
      timeoutRef.current = setTimeout(handler, 500);
    },
    ref,
  );

  useEventListener<'touchmove', HTMLElement>(
    'touchmove',
    endTimeout,
    ref,
  );

  useEventListener<'touchend', HTMLElement>(
    'touchend',
    endTimeout,
    ref,
  );

  return ref;
};
