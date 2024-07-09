export const appendIdsAppendIndex = <
  T = string
>(
  value: T,
  index: number
) =>
  index > 0
    ? (`${value}${index}` as const)
    : value;
