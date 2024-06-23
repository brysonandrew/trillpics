export const imag = [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1].map((v) => v * 40);

export const real = imag.map(() => 0);

const ORGAN_II = { real, imag };

export { ORGAN_II };
