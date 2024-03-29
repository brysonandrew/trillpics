import {
  useContext as useReactGallery,
  createContext,
} from 'react';
import { TGallery } from './types';

export const Gallery =
createContext<TGallery>(
    {} as TGallery,
  );

export const useGallery =
  (): TGallery =>
    useReactGallery<TGallery>(
      Gallery,
    );
