export type TTToCapitalize<
  T extends string,
  A extends string = string
> = T extends `${infer F}${infer R}`
  ? TTToCapitalize<
      "",
      `${Uppercase<F>}${Lowercase<R>}`
    >
  : A;
