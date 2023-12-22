type TExample = any;

export const sortByIndex = (
  itemA: TExample,
  itemB: TExample,
) => {
  const batchAIndex = itemA.name;
  const batchBIndex = itemB.name;
  if (batchBIndex < batchAIndex) {
    return 1;
  }
  if (batchBIndex > batchAIndex) {
    return -1;
  }

  return 0;
};
