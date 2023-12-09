import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { TResults } from './types';

export const Results =
  createContext<TResults>(
    {} as TResults,
  );

export const useResults = 
  (): TResults =>
    useReactContext<TResults>(Results);
