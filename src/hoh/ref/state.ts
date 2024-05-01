import {Dispatch, SetStateAction, useState} from 'react';

export type TRefState<E extends HTMLElement> =  [E | null, Dispatch<SetStateAction<E | null>>]

export const withRefState = <T extends object, E extends HTMLElement>(
  hook: (config: T) => any
) => {
  const useHook = (config: T) => {
    const ref = useState<E | null>(null);
    return hook({ref, ...config} as const);
  };
  return useHook;
};
