export type TTToCapitalize<
  T extends string,
  A extends string = string
> = T extends `${infer F}${infer R}`
  ? TTToCapitalize<
      "",
      `${Uppercase<F>}${Lowercase<R>}`
    >
  : A;

export const capitalize = <
  T extends string
>(
  word: T
): TTToCapitalize<T> =>
  `${word[0].toUpperCase()}${word
    .toLowerCase()
    .slice(1)}` as TTToCapitalize<T>;

export const capitalizeItem = (
  v: string
) => (v ? capitalize(v) : "");
