import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const App = createContext<TContext>(CONTEXT);

export const useApp = (): TContext =>
  useReactContext<TContext>(App);
