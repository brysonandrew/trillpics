import type { TPeriodicWaveParams } from "../types";

export const real = [
  1, 0.5, 1.3, 0.1, 1.6, 0.1, 1.9, 0.1, 2.2, 0.1,
].map((v) => v * 1);
export const imag = real.map(() => 0);

export const BELL_WAVE: TPeriodicWaveParams = {
  real,
  imag,
};
