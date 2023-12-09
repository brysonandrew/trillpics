import { useRef } from 'react';

export const useScrollIntoView = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(
    null,
  );

  return (instance: T) => {
    if (instance && !ref.current) {
      ref.current = instance;
      ref.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
};
