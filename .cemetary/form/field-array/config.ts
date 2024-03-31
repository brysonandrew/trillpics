export type TNameTemplate =
  `${string}s`;
// export type TArrayPathName =
//   `${TName}.${number}.value`;

export type TFieldArrayItem<
  V extends string = string,
> = {
  value: V;
};
export type TFieldArrayItems<
  V extends string = string,
> = TFieldArrayItem<V>[];

export type TFieldArrayPartialForm = {
  [
    name: TNameTemplate
  ]: TFieldArrayItems;
};
