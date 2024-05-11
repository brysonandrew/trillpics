
import {useMemo, useState} from 'react';
import { isNumber } from "@brysonandrew/utils-validation/is/number";
import { isDefined } from "@brysonandrew/utils-validation/is/defined";

export type TTimeout = ReturnType<Window['setTimeout']>;
export const isTimeout = (value?: unknown | TTimeout): value is TTimeout => {
  if (isDefined(value) && isNumber(value)) return true;
  return false;
};


export const isNumberFinite = (value?: unknown | number): value is number => {
  if (isNumber(value) && isFinite(value)) return true;
  return false;
};


type TBomb = {fuse: TTimeout | null};

type TBase = {
  target?: (...args: any[]) => any;
};
type TPrimed = TBase & {
  countdown: number;
};
type TDisarmed = TBase;
type TConfig = TPrimed | TDisarmed;
export const useTimebomb = (config: TConfig) => {
  const [isCountdown, setCountdown] = useState(false);
  const bomb = useMemo<TBomb>(() => ({fuse: null}), []);

  const cancel = () => {
    if (isTimeout(bomb.fuse)) {
      clearTimeout(bomb.fuse);
    }
  };

  const disarm = () => {
    cancel();
    setCountdown(false);
  };

  const trigger = () => {
    cancel();
    const isPrimed = 'countdown' in config && isNumberFinite(config.countdown);
    if (isPrimed) {
      bomb.fuse = window.setTimeout(() => {
        if (config.target) {
          config.target();
        }
        setCountdown(false);
      }, config.countdown);
    }
    setCountdown(isPrimed);
  };

  return {isCountdown, trigger, disarm};
};
