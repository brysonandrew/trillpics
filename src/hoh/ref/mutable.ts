import {MutableRefObject, useRef} from 'react';

export type TRefMutable<E extends HTMLElement> = MutableRefObject<E | null>;
export const withRefMutable = <T extends object, E extends HTMLElement>(
  hook: (config: T) => any
) => {
  const useHook = (config: T) => {
    const ref = useRef<E | null>(null);
    return hook({ref, ...config});
  };
  return useHook;
};
