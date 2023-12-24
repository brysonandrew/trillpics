import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Scroll = createContext<TContext>(CONTEXT);

export const useScroll = (): TContext =>
  useReactContext<TContext>(Scroll);
