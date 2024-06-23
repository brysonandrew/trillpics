import type { MutableRefObject } from "react";
import type { TPeriodicWaveParams } from "./types";

const N = 256;

export const generateChipTuneWave =
  (): TPeriodicWaveParams => {
    const real = Float32Array.from({ length: N }, (_, n) =>
      n === 0
        ? 0
        : (4 / (n * Math.PI)) *
          Math.sin(Math.PI * n * 0.18) *
          36
    );

    const imag = real.map(() => 0);

    return { real, imag };
  };

type TMethod = "cos" | "sin";

type TWaveParams = {
  index: number;
  length: number;
  method: TMethod;
  alpha?: number;
};

export const parabolaWave = ({
  index,
  length,
}: TWaveParams) => {
  if ((index *= 2) < 1) {
    return (0.5 * index * index) / length;
  }
  return (-0.5 * (--index * (index - 2) - 1)) / length;
};
// Math.round(
//   ((100 * index) / length) * (2 - index / length)
// );

// Source: https://www.w3.org/TR/webaudio/#oscillator-coefficients

export const bartlettWave = ({
  index,
  length,
  method,
}: TWaveParams) => {
  const d = length - index;
  return (2 / d) * (d / 2 - Math.abs(index - d / 2));
};

export const bartlettHannWave = ({
  index,
  length,
  method,
}: TWaveParams) => {
  const d = length - 1;
  return (
    0.62 -
    0.48 * Math.abs(index / d - 0.5) -
    0.38 * Math.cos((Math.PI * 2 * index) / d)
  );
};

export const blackmanWave = ({
  index,
  length,
  method,
  alpha = 4,
}: TWaveParams) => {
  const d = length - 1;
  const a0 = (1 - alpha) / 2;
  const a1 = 0.5;
  const a2 = alpha / 2;

  return Math.abs(
    a0 -
      a1 *
        Math[method as TMethod]((Math.PI * 2 * index) / d) +
      a2 * Math[method]((4 * Math.PI * index) / d)
  );
};
export const hammingWave = ({
  index,
  length,
  method = "sin",
}: TWaveParams) => {
  const d = length - 1;
  return (
    0.54 - 0.46 * Math[method]((Math.PI * 2 * index) / d)
  );
};

export const hannWave = ({
  index,
  length,
  method = "sin",
}: TWaveParams) => {
  const d = length - 1;
  return (
    0.5 * (1 - Math[method]((Math.PI * 2 * index) / d - 1))
  );
};

export const standardWave = ({
  index,
  length,
  method = "sin",
}: TWaveParams) => (index / length) * 440;
//-length * Math[method](mPhase * index);

export const lanczosWave = ({
  index,
  length,
  method = "sin",
}: TWaveParams) => {
  const d = length - 1;
  const x = (2 * index) / d - 1;
  return Math[method](Math.PI * x) / (Math.PI * x);
};

// export const tanWave = ({ index, length }: TWaveParams) =>
//   Math.tan(Math.PI * index);

export const sine = ({ index, length }: TWaveParams) => {
  const sampleFreq = 48000 / length;
  return (
    Math.sin(index / (sampleFreq / (Math.PI * 2))) * 10
  );
};
//y = 3 * sin((float)x / 10);
// Math.sin((index / length) * Math.PI) * 44;

export const sineII = ({ index, length }: TWaveParams) =>
  (Math.sin((index / length) * 3 * Math.PI) /
    (Math.PI * 3)) *
  120;

export const sineIII = ({ index, length }: TWaveParams) =>
  (Math.sin((index / length) * 5 * Math.PI) /
    (Math.PI * 5)) *
  120;

export const sineIV = ({ index, length }: TWaveParams) =>
  (Math.sin((index / length) * 7 * Math.PI) /
    (Math.PI * 7)) *
  440;

export const sawtoothWave = ({
  index,
  length,
}: TWaveParams) => {
  const d = length - 1 - 1;
  const x = (2 * index) / d;
  return 1 - Math.abs((x % 4) - 2);
};
export const cosine = ({ index, length }: TWaveParams) =>
  (Math.PI * index) / length;
// Math.cos((Math.PI * index) / d - Math.PI / 2);
export const tanWave = ({ index, length }: TWaveParams) =>
  Math.atan(2 * Math.PI * 6.67 * index);
export const cosineWave = ({
  index,
  length,
}: TWaveParams) => {
  const d = length - 1;
  const x = (2 * index) / d - 1;
  return Math.cos(Math.PI * x) * 20;
};
export const squareWave = ({
  index,
  length,
}: TWaveParams) => {
  const d = length - index;
  const x = (2 * index) / d - 1;
  return Math.sign(Math.sin(Math.PI * x)) * 10;
  // const gap = 2 / d - 1;
  // const high = 12 / d - 1;
  // const low = 6 / d - 1;
  // return ((x + gap) % 6 < 3 ? 6 : 0) * 2;
};

//
export const gaussWave = ({
  index,
  length,
  alpha = 1,
}: TWaveParams) => {
  const d = length - 1;
  return Math.pow(
    Math.E,
    -0.5 * Math.pow((index - d / 2) / ((alpha * d) / 2), 2)
  );
};

export const morningStarWave = ({
  index,
  length,
}: TWaveParams) => {
  const k = length * 2;
  const x = ((index - 0) * (1 - -1)) / (length - 0) + -1;
  return ((1 + k) * x) / (1 + k * Math.abs(x));
};

export const rectangularWave = () => 1;

export const triangularWave = ({
  index,
  length,
}: TWaveParams): number => {
  const d = length - 1;
  return (
    (2 / length) *
    (length / 2 - Math.abs(index - d / 2)) *
    10
  );
};
// {
//   const d = length - 1;
//   const high = 12 / d - 1;
//   const low = 6 / d - 1;
//   const gap = 2 / d - 1;
//   const x = (2 * index) / d - 1;
//   return (
//     Math.pow(Math.abs(((x + gap) % high) - low), 2.0) * 10
//   );
// };

export const expReverseSawtooth = ({
  index,
  length,
}: TWaveParams): number => {
  const d = length - 1;
  const high = 12 / d - 1;
  const low = 6 / d - 1;
  const gap = 2 / d - 1;
  const x = (2 * index) / d;
  return (
    Math.pow(Math.abs(((x + gap) % high) - low), 0.5) * 10
  );
};

export const triangleWave = ({
  index,
  length,
}: TWaveParams) => {
  const d = length - 1 - 1;
  const high = 12 / d;
  const low = 6 / d;
  const gap = 2 / d;
  const x = (2 * index) / d;
  return Math.abs(((x + gap) % high) - low) * 10;
};
// y = abs((x++ % 6) - 3);

export const generateValues = (
  method: (config: TWaveParams) => number
): Float64Array => {
  const length = N;
  const values = new Float64Array(length);
  for (let index = 0; index < values.length; index++) {
    values[index] = method({
      index,
      length,
      method: "sin",
    });
  }
  return values;
};

export const generateWave = (
  method: (config: TWaveParams) => number
): PeriodicWaveOptions => {
  const length = N;
  const real = new Float32Array(length);
  const imag = new Float32Array(real.length);
  for (let index = 0; index < length; index++) {
    real[index] = method({ index, length, method: "cos" });
    imag[index] = method({ index, length, method: "sin" });
  }
  return { real, imag };
};

export const generateBasicWave = (
  method: (step: number) => number,
  f?: number
): PeriodicWaveOptions => {
  const length = N;
  const real = new Float32Array(length);
  const imag = new Float32Array(real.length);
  for (let index = 0; index < length; index++) {
    const value = method(index) * (f ?? 1);
    real[index] = value;
    imag[index] = value;
  }
  return { real, imag };
};

export const sharkFinn = ({
  index,
  length,
}: TWaveParams) => {
  if (index < 0) return 0;
  index = ((index * 2) % 2) + 0.05;
  if (index < 1) {
    return (1 + Math.log(index) / 4) * 45;
  }
  return Math.pow(-index, -2) * 45;
};

export type TWaveShaperRef = (WaveShaperNode[] | null)[];

export type TWaveConfig = {
  waveRecord: TWaveConfig;
  context: AudioContext;
  waveShaperRef: MutableRefObject<TWaveShaperRef>;
};

const threshold = -27; // dB
const headroom = 21; // dB

const e4 = (x: number, k: number) => 1.0 - Math.exp(-k * x);

const dBToLinear = (db: number) =>
  Math.pow(10.0, 0.05 * db);

const shape = (x: number) => {
  const linearThreshold = dBToLinear(threshold);
  const linearHeadroom = dBToLinear(headroom);

  const maximum = 1.05 * linearHeadroom * linearThreshold;
  const kk = maximum - linearThreshold;

  const sign = x < 0 ? -1 : +1;
  const absx = Math.abs(x);

  let shapedInput =
    absx < linearThreshold
      ? absx
      : linearThreshold +
        kk * e4(absx - linearThreshold, 1.0 / kk);
  shapedInput *= sign;

  return shapedInput;
};

export const generateMirrorCurve =
  (): PeriodicWaveOptions => {
    const n = N;
    const real = new Float32Array(n);
    const imag = new Float32Array(n);

    const n2 = n / 2;

    for (let i = 0; i < n2; ++i) {
      let x = i / n2;
      x = shape(x);

      real[n2 + i] = x;
      imag[n2 - i - 1] = -x;
    }

    return { real, imag };
  };

export const chipTuneWave = (): TPeriodicWaveParams => {
  const CHIPTUNE = generateChipTuneWave();
  return CHIPTUNE;
};

export const generateSharkFinn =
  (): TPeriodicWaveParams => {
    const SHARK_FINN = generateWave(sharkFinn);
    return SHARK_FINN;
  };

export const distortion = (
  { index: x, length: k }: TWaveParams,
  deg = 1.0
) => {
  if (Math.abs(x) < 0.001) {
    // should output 0 when input is 0
    return 0;
  } else {
    return (
      ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x))
    );
  }
};
