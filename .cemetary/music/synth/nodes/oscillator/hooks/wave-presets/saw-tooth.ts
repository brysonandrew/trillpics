export const imag = Array.from({ length: 8192 }, (_, n) =>
  n === 0 ? 0 : Math.pow(-1, n + 1) * (2 / (n * Math.PI))
);
export const real = imag.map(() => 0);

const SAW_TOOTH = { imag, real };

export { SAW_TOOTH };
