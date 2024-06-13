import { BEATS_KEYS } from "~/hooks/music/beats/constants";

export type TPurcussions = typeof BEATS_KEYS;
export type TPurcussionKey =
  TPurcussions[number];
export type TBeats = readonly (0 | 1)[];
export type TPurcussionRecord = Record<
  TPurcussionKey,
  TBeats
>;
export type TPurcussionPresetRecord =
  Record<
    string,
    Partial<TPurcussionRecord>
  >;
export type TPlayBeatsOptions = {
  volume?: number;
  version?: number;
};
export type TBeatsSequenceKey =
  (typeof BEATS_KEYS)[number];