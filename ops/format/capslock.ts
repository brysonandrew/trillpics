export const capslock = <
  T extends string
>(
  word: T
) => word.toUpperCase() as Uppercase<T>;

export const capslockItem = <
  T extends string
>(
  v: T
) => (v ? capslock(v) : "");
