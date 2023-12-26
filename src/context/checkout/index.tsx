import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { CONTEXT } from './constants';
import { TContext } from './types';

export const Checkout = createContext<TContext>(CONTEXT);

export const useCheckout = (): TContext =>
  useReactContext<TContext>(Checkout);
