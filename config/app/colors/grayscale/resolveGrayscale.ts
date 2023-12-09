import { TRgb } from '../types';

export const resolveGrayscale = (
  value: number,
) => {
  const result = [...Array(3)]
    .map(() => value)
    .join(', ') as TRgb;
  return result;
};

export const resolveGrayscaleRange = (
  min: number,
  max: number,
  range = max - min,
) =>
  [...Array(10)].map((_, index) =>
    resolveGrayscale(
      ~~(
        min +
        (range * index) / 10 -
        1 / 20
      ),
    ),
  );
