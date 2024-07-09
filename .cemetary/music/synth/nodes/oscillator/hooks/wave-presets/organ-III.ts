export const real = [
  0, 0.8, 0.6, 0.6, 0.7, 0.6, 0, 0.8, 0.3, 1,
].map((v) => v * 20);

export const imag = real.map(() => 0);

const ORGAN_III = { real, imag };

export { ORGAN_III };
