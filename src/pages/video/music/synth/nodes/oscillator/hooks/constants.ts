import { resolveObjectKeys } from "~/utils/object";

export const OSCILLATOR_OPTIONS_LOOKUP =
  {
    frequency: "frequency",
    detune: "detune",
  } as const;

export const OSCILLATOR_OPTIONS =
  resolveObjectKeys(
    OSCILLATOR_OPTIONS_LOOKUP
  );

export enum ECustomWave {
  ExponentialReverseSawtooth = "ExponentialReverseSawtooth",
  Parabola = "Parabola",
  Sawtooth = "sawtooth",
  Square = "square",
  Sine = "sine",
  SineII = "SineII",
  SineIII = "SineIII",
  SineIV = "SineIV",
  Triangle = "triangle",
  Brass = "Brass",
  Organ = "Organ",
  OrganII = "OrganII",
  OrganIII = "OrganIII",
  BounceOut = "BounceOut",
  BounceInOut = "BounceInOut",
  BounceIn = "BounceIn",
  Gong = "Gong",
  Chime = "Chime",
  Tubular = "Tubular",
  TubularII = "TubularII",
  Bell = "Bell",
  SteelDrum = "SteelDrum",
  Distortion = "Distortion",
  Hann = "Hann",
  Hamming = "Hamming",
  Mirror = "Mirror",
  BartlettHann = "BartlettHann",
  Bartlett = "Bartlett",
  Lanczos = "Lanczos",
  Gauss = "Gauss",
  Rectangle = "Rectangle",
  Cosine = "Cosine",
  Triangular = "Triangular",
  MorningStar = "MorningStar",
  Horn = "Horn",
  Bass = "Bass",
  Chiptune = "Chiptune",
  SharkFinn = "SharkFinn",
  Standard = "Standard",
  Blackmann = "Blackmann",
  Tan = "Tan",
}

export const CUSTOM_WAVES: readonly ECustomWave[] =
  [
    ECustomWave.ExponentialReverseSawtooth,

    ECustomWave.Blackmann,
    ECustomWave.Parabola,

    ECustomWave.Tan,
    ECustomWave.Triangle,
    ECustomWave.Triangular,

    ECustomWave.Cosine,
    ECustomWave.Sine,
    ECustomWave.SineII,
    ECustomWave.SineIII,
    ECustomWave.SineIV,

    ECustomWave.Square,
    ECustomWave.Sawtooth,

    ECustomWave.Brass,

    ECustomWave.Organ,
    ECustomWave.OrganII,
    ECustomWave.OrganIII,

    ECustomWave.BounceIn,
    ECustomWave.BounceInOut,
    ECustomWave.BounceOut,
    ECustomWave.TubularII,
    ECustomWave.Gong,
    ECustomWave.Chime,
    ECustomWave.Tubular,
    ECustomWave.Bell,
    ECustomWave.SteelDrum,
    ECustomWave.Distortion,

    ECustomWave.Standard,
    ECustomWave.Hamming,
    ECustomWave.Hann,
    ECustomWave.Mirror,
    ECustomWave.Bartlett,
    ECustomWave.BartlettHann,
    ECustomWave.Lanczos,
    ECustomWave.Gauss,
    ECustomWave.Rectangle,
    ECustomWave.MorningStar,
    ECustomWave.Horn,
    ECustomWave.Bass,
    ECustomWave.Chiptune,
    ECustomWave.SharkFinn,
  ] as const;
