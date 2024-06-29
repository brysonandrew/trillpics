export type TSequenceSliderOptions = {
  offset: number;
  interval: number;
  repeat: number;
  delay: number;
  duration: number;
  beats: number;
};
export type TSequenceSliderOptionsKey =
  keyof TSequenceSliderOptions;
export type TSequenceOptions =
  TSequenceSliderOptions;
export type TSequenceOptionsKey =
  keyof TSequenceOptions;
export type TSequenceOptionsIncrementerKey =
  keyof Omit<TSequenceOptions, "beats">;