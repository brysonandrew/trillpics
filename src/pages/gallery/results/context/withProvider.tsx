import { type FC } from 'react';
import { Results } from '.';
import { useEntriesContext } from './entries/useEntriesContext';
import { TResults } from './types';

export function withProvider<
  T extends object,
>(I: FC<T>) {
  const C = (props: T) => {
    const entriesContext =
      useEntriesContext();

    const value: TResults = {
      ...entriesContext,
    };

    return (
      <Results.Provider value={value}>
        <I {...props} />
      </Results.Provider>
    );
  };
  return C;
}
