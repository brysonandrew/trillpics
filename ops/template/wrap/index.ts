export const wrap = <
  T extends string,
  S extends string,
  E extends string = S
>(
  v: T,
  s: S,
  e?: E
) => `${s}${v}${e ?? s}` as const;
