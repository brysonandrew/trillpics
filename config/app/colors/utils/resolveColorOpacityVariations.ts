import { TRgb } from '../types';
import { varRgb } from './varRgb';

export const resolveColorOpacityVariations =
  (key: string, value: TRgb) => {
    return [...Array(10)].reduce(
      (a, _, index) => {
        if (index === 0) {
          return {
            ...a,
            [key]: varRgb(value),
          };
        }
        const next = varRgb(
          value,
          index,
        );
        return {
          ...a,
          [`${key}-0${index}`]: next,
        };
      },
      {},
    );
  };
