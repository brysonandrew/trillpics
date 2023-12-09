import {
  Dispatch,
  SetStateAction,
} from 'react';

export type TStatePair<V> = [
  V,
  Dispatch<SetStateAction<V>>,
];
