import type { TPeriodicWaveParams } from "../types";

export const real = [
  0.91, 0.54, 162, 0.017, 317, 0.035, 521, 0.409, 771,
  0.782, 943, 0.005, 1062.5, 1.003, 1182, 0.005, 1266,
  0.018, 1391, 0.67, 1511, 0.005, 1633, 0.006, 1752, 0.662,
  1899, 0.009, 2142, 0.057, 2377, 0.005, 2555, 0.118, 2988,
  0.019, 3437, 0.015, 3813, 0.006, 4868, 0.004,
].map((v) => v * 0.004);
export const imag = real.map(() => 0);

export const TUBULAR_II: TPeriodicWaveParams = {
  real,
  imag,
};
