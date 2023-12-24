import { useEventListener } from '@hooks/events/useEventListener';
import { useEffect, useRef } from 'react';

export type TConfig = {
  onPointerEnter(event: PointerEvent): void;
  onPointerLeave(event: PointerEvent): void;
};
export const useViewportPresence = ({
  onPointerLeave,
  onPointerEnter,
}: TConfig) => {
  const docRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    docRef.current = document.documentElement;
  }, []);

  useEventListener<'pointerenter', HTMLElement>(
    'pointerenter',
    onPointerEnter,
    docRef,
  );

  useEventListener<'pointerleave', HTMLElement>(
    'pointerleave',
    onPointerLeave,
    docRef,
  );
};
