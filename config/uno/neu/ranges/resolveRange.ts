export const resolveRange = (
  min: number,
  max: number,
  multiplier = 1,
) =>
  [
    ...Array(
      ~~(max / multiplier - min),
    ),
  ].map(
    (_, i) =>
      +(min + i * multiplier).toFixed(
        multiplier < 1
          ? ~~(20 * multiplier)
          : 0,
      ),
  );