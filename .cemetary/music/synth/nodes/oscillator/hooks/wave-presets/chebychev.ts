export const chebyschev = (
  context: AudioContext,
  order: number
): Float32Array => {
  /**
   * get the coefficient for that degree
   * @param  x the x value
   * @param  degree
   * @param  memo memoize the computed value. this speeds up computation greatly.
   */
  const getCoefficient = (
    x: number,
    degree: number,
    memo: Map<number, number>
  ): number => {
    if (memo.has(degree)) {
      return memo.get(degree) as number;
    } else if (degree === 0) {
      memo.set(degree, 0);
    } else if (degree === 1) {
      memo.set(degree, x);
    } else {
      memo.set(
        degree,
        2 * x * getCoefficient(x, degree - 1, memo) -
          getCoefficient(x, degree - 2, memo)
      );
    }
    return memo.get(degree) as number;
  };

  const shaper = context.createWaveShaper();
  const curve = new Float32Array(4096);

  for (let i = 0; i < 4096; i++) {
    curve[i] = getCoefficient(i, order, new Map());
  }
  shaper.curve = curve;

  return curve;
};
