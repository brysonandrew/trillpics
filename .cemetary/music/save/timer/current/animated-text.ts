import { useMemo } from "react";
import { useAnimationFrame } from "framer-motion";
import { useContextPlayer_Init } from "~/pages/video/player/_context/init";
import { isNull } from "~/utils/validation/is/null";

type TDivs = (HTMLDivElement | null)[];

type TValueRecord = {
  m: TDivs;
  s: TDivs;
  ms: TDivs;
};

export type TTimerKey =
  keyof TValueRecord;
export type TTimerKeys = TTimerKey[];

type TTimerText = TValueRecord & {
  start: number;
  isStarted: boolean;
};

export const useAnimatedText = (
  updater: (elapsed: number) => void
) => {
  const text =
    useMemo<TTimerText>(() => {
      return {
        isStarted: false,
        start: 0,
        m: [null, null],
        s: [null, null],
        ms: [null, null],
      };
    }, []);
  const { fps } =
    useContextPlayer_Init();

  useAnimationFrame(() => {
    if (!text.isStarted) {
      text.isStarted = true;
      text.start = Date.now();
      return;
    }
    const delta =
      Date.now() - text.start;
    updater(delta);
    const totalSeconds = delta / 1000;
    const m = String(
      Math.floor(totalSeconds / 60)
    )
      .padStart(2, "0")
      .split("");
    const s = String(
      Math.floor(totalSeconds % 60)
    )
      .padStart(2, "0")
      .split("");
    const ms = String(
      Math.ceil(
        totalSeconds * fps * (60 / fps)
      ) % 60
    )
      .padStart(2, "0")
      .split("");

    const valueRecord = {
      m,
      s,
      ms,
    } as const;
    const keys = Object.keys(
      valueRecord
    ) as TTimerKeys;

    keys.forEach((key) => {
      const values = valueRecord[key];
      values.forEach((value, index) => {
        const v = text[key][index];
        if (!isNull(v)) {
          v.innerText = value;
        }
      });
    });
  });

  return text;
};
