import {
  useContext as useReactWorkshop,
  createContext,
} from 'react';
import { TWorkshop } from './types';

export const Workshop =
createContext<TWorkshop>(
    {} as TWorkshop,
  );

export const useWorkshop =
  (): TWorkshop =>
    useReactWorkshop<TWorkshop>(
      Workshop,
    );
