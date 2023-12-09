import { useTimeoutRef } from '@hooks/window/useTimeoutRef';
import { useEffect } from 'react';

export const useDebounce = () => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();

  useEffect(() => {
    return () => {
      endTimeout();
    };
  }, []);

  const handler = (
    callback: () => void,
    ms = 500,
  ) => {
    endTimeout();
    timeoutRef.current = setTimeout(
      callback,
      ms,
    );
  };

  return handler;
};
