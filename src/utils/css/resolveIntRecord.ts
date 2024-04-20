import { TPxRecord, TPxEntries, TPxEntry, TIntRecord } from '~/types/shapes';
import { stripPx } from './stripPx';

export const resolveIntRecord = (pxRecord: TPxRecord) => {
  const entries = Object.entries(pxRecord) as TPxEntries;
  const intRecord = entries.reduce(
    (a: TIntRecord, [key, value]: TPxEntry) => ({
      ...a,
      [key]: stripPx(value),
    }),
    {} as TIntRecord,
  );

  return intRecord;
};
