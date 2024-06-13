export const STEPS_XXXX = [
  1,
  1,
  1,
  1, //D
  9, //A#
  6, //G
  8, //A
  4, //F
];
export const STEPS = [
  0, // C#
  0,
  0,
  0,
  1, //D
  9,
  0,
  8, //E
];

export const RAPTOR = [
  ...STEPS_XXXX,
  ...STEPS,
];
const WIND_RACE = [
  9, //A
  9,
  9,
  9,

  7, //E
  7,
  4,
  5,
  4,

  5,
  4,
  5,
  4,
  5,

  4,
  5,
  4,
  5,
];
export const MIDIS_PRESETS = {
  bass: {
    race: WIND_RACE,
    raptor: RAPTOR,
  },
  treble: {
    race: WIND_RACE,
    raptor: RAPTOR,
  },
} as const;
