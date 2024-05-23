export const lowercase = <
  T extends string
>(
  word: T
) => word.toLowerCase() as Lowercase<T>;

export const lowercaseItem = <
  T extends string
>(
  v: T
) => (v ? lowercase(v) : "");
