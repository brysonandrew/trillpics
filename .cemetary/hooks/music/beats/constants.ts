import { resolveObjectKeys } from "~/utils/object";

export const BEATS_RECORD = {
  tom: "tom",
  hihat: "hihat",
  snare: "snare",
  kick: "kick",
} as const;

export const BEATS_KEYS =
  resolveObjectKeys(BEATS_RECORD);

export const BEATS_VERSION_LOOKUP = {
  tom: 0,
  hihat: 2,
  snare: 2,
  kick: 0,
} as const;
