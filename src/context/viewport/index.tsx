import {
  useContext as useReactContext,
  createContext,
} from 'react';

import { TContext } from './types';

export const Viewport = createContext<TContext>({} as TContext);

export const useViewport = (): TContext =>
  useReactContext<TContext>(Viewport);
