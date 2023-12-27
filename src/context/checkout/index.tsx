import {
  useContext as useReactContext,
  createContext,
} from 'react';
import { TContext } from './config';

export const Checkout = createContext<TContext>({} as TContext);

export const useCheckout = (): TContext =>
  useReactContext<TContext>(Checkout);
