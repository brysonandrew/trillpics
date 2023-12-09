import { TRgb } from '../types';
import { varRgb } from './varRgb';

type TValue = TRgb | null;
export const resolveColorSeries = (
  key: string,
  series: TValue[],
) => {
  return series.reduce(
    (a, v, index) =>
      v === null
        ? a
        : {
            ...a,
            [index === 0
              ? key
              : `${key}-${index}`]:
              varRgb(v),
          },
    {},
  );
};
