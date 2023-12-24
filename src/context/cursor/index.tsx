import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Cursor = createContext<TContext>(CONTEXT);

export const useCursor = (): TContext =>
  useReactContext<TContext>(Cursor);
