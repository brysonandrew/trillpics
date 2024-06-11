export const SCALE_RECORD = {
  all: [...Array(12)].map((_, index) => index),
  aeolian: [0, 2, 3, 5, 7, 8, 10], //minor
  blues: [0, 3, 5, 6, 7, 10], //basic with blues note // includes d5 that ive made 6
  chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10], 
  doubleharmonic: [0, 1, 4, 5, 7, 8, 11],
  harmonicminor: [0, 2, 3, 5, 7, 8, 11],
  ionian: [0, 2, 4, 5, 7, 9, 11],
  locrian: [0, 1, 3, 5, 6, 8, 10], // includes d5 that ive made 6
  lydian: [0, 2, 4, 6, 7, 9, 11],
  majorpentatonic: [0, 2, 4, 7, 9],
  melodicminor: [0, 2, 3, 5, 7, 9, 11],
  minorpentatonic: [0, 3, 5, 7, 10],
  mixolydian: [0, 2, 4, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  wholetone: [0, 2, 4, 6, 8, 10],
} as const;
export type TScaleRecord = typeof SCALE_RECORD;
export type TScaleKey = keyof TScaleRecord;
export const SCALES = [
  ...Object.keys(SCALE_RECORD),
] as TScaleKey[];
