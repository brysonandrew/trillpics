import type { TPeriodicWaveParams } from "../types";

export const real = [
  0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8,
];

export const imag = real.map(() => 0);

export const BRASS_WAVE: TPeriodicWaveParams = {
  real,
  imag,
};
