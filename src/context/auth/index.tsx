import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Auth = createContext<TContext>(CONTEXT);

export const useAuth = (): TContext =>
  useReactContext<TContext>(Auth);
