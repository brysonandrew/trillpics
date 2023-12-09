import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Viewport = createContext<TContext>(CONTEXT);

export const useViewport = (): TContext =>
  useReactContext<TContext>(Viewport);
