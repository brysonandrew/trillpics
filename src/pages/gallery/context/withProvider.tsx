import {
  useEffect,
  type FC,
} from 'react';
import { Gallery } from '.';
import { TGallery } from './types';
import { useClipboardContext } from './clipboard/useClipboardContext';
import { useEntriesContext } from '@pages/gallery/context/entries/useEntriesContext';

export function withProvider<
  T extends object,
>(I: FC<T>) {
  const C = (props: T) => {
    const clipboardContext =
      useClipboardContext();
    // useEffect(() => {
    //   const root =
    //     document.getElementById('root');
    //   if (root) {
    //     root.style.height = '100%';
    //   }
    // }, []);
    const entriesContext =
      useEntriesContext();

    const value: TGallery = {
      clipboardContext,
      entriesContext,

    };
    return (
      <Gallery.Provider value={value}>
        <I {...props} />
      </Gallery.Provider>
    );
  };
  return C;
}
