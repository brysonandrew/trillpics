export type TStrRecord = Record<
  string,
  any
>;

export type TSingleRecordEntry<T> = {
  [K in keyof T]: Pick<T, K>;
};
export type TSingleRecordEntryValue<
  T,
  K extends keyof T
> = TSingleRecordEntry<T>[K];

export type TPartialAtLeastOne<
  T,
  U = TSingleRecordEntry<T>
> = Partial<T> & U[keyof U];

export type TResolveObjectKeys = <T>(obj: T) =>
  (keyof T extends infer U ? U extends string ? U : U extends number ? `${U}` : never : never)[]