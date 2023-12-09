import { TRgb, TRgbs } from "../types";

export type TRgbRecordKey<
  T extends string,
> = `${T}-${number}` | T;
export type TRgbRecord<
  T extends string,
> = Record<TRgbRecordKey<T>, TRgb>;
export const resolveRgbRecord = <
  T extends string,
>(
  rgbs: TRgbs,
  key: T,
) => {
  type TRecord = Record<
    TRgbRecordKey<T>,
    TRgb
  >;
  return rgbs.reduce<TRecord>(
    (a, c, i) => {
      const recordKey: TRgbRecordKey<T> =
        i ? `${key}-${i}` : key;
      a[recordKey] = c;
      return a;
    },
    {} as TRecord,
  );
};
