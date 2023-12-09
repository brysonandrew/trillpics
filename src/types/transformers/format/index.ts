export type TTCamelToKebab<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? TTCamelToKebab<
      R,
      `${A}${F extends Lowercase<F>
        ? ''
        : '-'}${Lowercase<F>}`
    >
  : A;

export type TTKebabToCamel<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? TTKebabToCamel<
      F extends '-' ? Capitalize<R> : R,
      `${A}${F extends `-` ? '' : F}`
    >
  : A;
