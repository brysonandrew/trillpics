const HZ = 440;
export const midiToHz = (midi: number) =>
  Math.pow(2, (midi - 69) / 12) * HZ;



export const NOTES = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

export const midiToNote = (
  midiNum: number,
  octaveMiddleC?: number
) => {
  if (!midiNum) return "C";
  const omc = octaveMiddleC || 4;

  let octaveAdjust = 0;
  while (midiNum < 0) {
    midiNum += 12;
    octaveAdjust -= 1;
  }
  const pitch = midiNum % 12;
  const octave =
    Math.floor(midiNum / 12) - (5 - omc) + octaveAdjust;
  const midiName = NOTES[pitch] + octave.toString();
  return midiName;
};
