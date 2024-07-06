import { MotionValue } from "framer-motion";
import { TMusicKey } from "~/store/state/music/types";

export type TProgressKey =
  | TMusicKey
  | "track";

export type TProgressStepRecord =
  Record<TProgressKey, number>;

export type TProgressMotionRecord =
  Record<
    TProgressKey,
    MotionValue<number>
  >;
