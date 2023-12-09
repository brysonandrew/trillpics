import { TExample } from './useEntriesContext';

export const sortByIndex = (
  batchA: TExample,
  batchB: TExample,
) => {
  const batchAIndex = batchA.name;
  const batchBIndex = batchB.name;
  if (batchBIndex < batchAIndex) {
    return 1;
  }
  if (batchBIndex > batchAIndex) {
    return -1;
  }

  return 0;
};
