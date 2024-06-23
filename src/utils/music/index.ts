const HZ = 440;
export const midiToHz = (midi: number) =>
  Math.pow(2, (midi - 69) / 12) * HZ;


// function noteToFreq(note) {
//   let a = 440; //frequency of A (coomon value is 440Hz)
//   return (a / 32) * (2 ** ((note - 9) / 12));
// }

export const hzToMidi = (hz:number) => Math.log(hz/HZ)/Math.log(2) * 12 + 69;
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
