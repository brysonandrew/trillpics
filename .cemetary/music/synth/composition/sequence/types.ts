export type TSequenceNumberOptions = {
  offset: number;
  interval: number;
  repeat: number;
  delay: number;
  duration: number;
  beats: number;
};
export type TSequenceNumberOptionsKey =
  keyof TSequenceNumberOptions;
export type TSequenceOptions =
  TSequenceNumberOptions;
export type TSequenceOptionsKey =
  keyof TSequenceOptions;
export type TSequenceOptionsIncrementerKey =
  keyof Omit<TSequenceOptions, "beats">;