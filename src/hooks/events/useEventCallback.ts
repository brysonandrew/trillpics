import { useRef, useEffect } from 'react';

type TFn = (value: any) => void;
export const useEventCallback = (fn: TFn) => {
  const ref = useRef<TFn>(() => {
    throw new Error(
      'Cannot call an event handler while rendering.',
    );
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return fn;
};
