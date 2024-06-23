import type { TPeriodicWaveParams } from "../types";

export const real = [
  0, 1, 0.8144329896907216, 0.20618556701030927,
  0.020618556701030927,
].map((v) => v * 4);

export const imag = real.map(() => 0);

export const BASS_WAVE: TPeriodicWaveParams = {
  real,
  imag,
};
