import { TBitcrusher } from "~/pages/video/music/_context/refs/audio/bitcrusher/types";
import { TOscillator } from "~/pages/video/music/_context/refs/audio/oscillators/types";
import { isDefined } from "~/utils/validation/is/defined";
import { isNull } from "~/utils/validation/is/null";

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

export const noteFromPitch = (
  frequency: number
) => {
  const noteNum =
    12 *
    (Math.log(frequency / 440) /
      Math.log(2));
  return Math.round(noteNum) + 69;
};

export const frequencyFromNoteNumber = (
  note: number
) =>
  440 * Math.pow(2, (note - 69) / 12);

export const centsOffFromPitch = (
  frequency: number,
  note: number
) =>
  Math.floor(
    (1200 *
      Math.log(
        frequency /
          frequencyFromNoteNumber(note)
      )) /
      Math.log(2)
  );

const HZ = 440;
export const noteToFrequency = (
  note: number
) => Math.pow(2, (note - 69) / 12) * HZ;
export const midiToHz = (
  note: number
) => Math.pow(2, (note - 69) / 12) * HZ;
export const decebelsToAmps = (
  db: number
) => Math.pow(10, db / 20);
export const centsToHz = (
  cents: number
) => Math.pow(2, cents / 1200);

export const isOscillator = (
  target: any
): target is TOscillator => {
  if (
    !isNull(target) &&
    "node" in target &&
    target.node instanceof
      OscillatorNode
  ) {
    return true;
  }
  return false;
};

export const isOscillatorNode = (
  target: AudioNode | null | any
): target is OscillatorNode => {
  if (
    !isNull(target) &&
    target instanceof OscillatorNode
  ) {
    return true;
  }
  return false;
};

export const isBitcrusher = (
  target: any
): target is TBitcrusher => {
  if (
    !isNull(target) &&
    target.node instanceof
      AudioWorkletNode
  ) {
    return true;
  }
  return false;
};
export const isBiquadFilterNode = (
  target: AudioNode | null
): target is BiquadFilterNode => {
  if (
    !isNull(target) &&
    target instanceof BiquadFilterNode
  ) {
    return true;
  }
  return false;
};

export const isIirFilterNode = (
  target: AudioNode
): target is IIRFilterNode => {
  if (target instanceof IIRFilterNode) {
    return true;
  }
  return false;
};

export const isAudioNode = (
  target: AudioNode
): target is AudioNode => {
  if (target instanceof AudioNode) {
    return true;
  }
  return false;
};

export const isGainNode = (
  target?: AudioNode | null
): target is GainNode => {
  if (
    isDefined(target) &&
    !isNull(target) &&
    target instanceof GainNode
  ) {
    return true;
  }
  return false;
};

export const isDelayNode = (
  target: AudioNode | null
): target is DelayNode => {
  if (
    !isNull(target) &&
    target instanceof DelayNode
  ) {
    return true;
  }
  return false;
};

export const isAudioWorklet = (
  target: AudioNode | null
): target is AudioWorkletNode => {
  if (
    !isNull(target) &&
    target instanceof AudioWorkletNode
  ) {
    return true;
  }
  return false;
};

export const isAudioParam = (
  target: null | any
): target is AudioParam => {
  if (target instanceof AudioParam) {
    return true;
  }
  return false;
};

export const normalize = (
  num: number,
  floor: number,
  ceil: number
) => ((ceil - floor) * num) / 1 + floor;
export const NOTE_NAMES: string[] = [
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
export const noteToName = (
  noteNum: number,
  octaveMiddleC?: number
) => {
  if (!noteNum) return "C";
  const omc = octaveMiddleC || 4;

  let octaveAdjust = 0;
  while (noteNum < 0) {
    noteNum += 12;
    octaveAdjust -= 1;
  }
  const pitch = noteNum % 12;
  const octave =
    Math.floor(noteNum / 12) -
    (5 - omc) +
    octaveAdjust;
  const noteName =
    NOTE_NAMES[pitch] +
    octave.toString();
  return noteName;
};

export const NODES = [
  "oscillator",
  "delayNode",
  "gainNode",
  "biQuadFilter",
  "iirFilter",
  "workleTNodeItem",
] as const;

export type TAudioNodeKey =
  (typeof NODES)[number];

export type TAudioNodesKey =
  `${TAudioNodeKey}s`;

export type TEntry<T> = [string, T];

export type TParamKeyRecord = {
  oscillator: keyof Omit<
    OscillatorNode,
    "wave"
  >;
  delayNode: keyof DelayNode;
  iirFilter: keyof IIRFilterNode;
  biQuadFilter: keyof BiquadFilterNode;
  workleTNodeItem: keyof AudioWorkletNode;
  gainNode: keyof GainNode;
};

export type TNodeItemRecord = {
  oscillator: OscillatorNode;
  delayNode: DelayNode;
  iirFilter: IIRFilterNode;
  biQuadFilter: BiquadFilterNode;
  workleTNodeItem: AudioWorkletNode;
  gainNode: GainNode;
};

export type TParamStateRecord = Partial<
  Record<TAudioNodeKey, number>
>;

export type TParamKey =
  TParamKeyRecord[TAudioNodeKey];
