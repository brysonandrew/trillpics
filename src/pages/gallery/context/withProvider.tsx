import {
  useEffect,
  type FC,
} from 'react';
import { Workshop } from '.';
import { TWorkshop } from './types';
import { useClipboardContext } from './clipboard/useClipboardContext';

export function withProvider<
  T extends object,
>(I: FC<T>) {
  const C = (props: T) => {
    const clipboardContext =
      useClipboardContext();
    useEffect(() => {
      const root =
        document.getElementById('root');
      if (root) {
        root.style.height = '100%';
      }
    }, []);

    const value: TWorkshop = {
      clipboardContext,
    };
    return (
      <Workshop.Provider value={value}>
        <I {...props} />
      </Workshop.Provider>
    );
  };
  return C;
}
