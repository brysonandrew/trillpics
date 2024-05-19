
import {useMemo, useState} from 'react';
import { TTimeout, isTimeout, isNumberFinite } from '~/utils/validation/is/timeout';


type TBomb = {fuse: TTimeout | null};
export const useTimebomb = (countdown = 1000, target?: (...args: any[]) => any) => {
  const [isArmed, arm] = useState(false);
  const bomb = useMemo<TBomb>(() => ({fuse: null}), []);

  const cancel = () => {
    if (isTimeout(bomb.fuse)) {
      clearTimeout(bomb.fuse);
    }
  };

  const disarm = () => {
    cancel();
    arm(false);
  };

  const trigger = (...args:any[]) => {
    console.log("TRIGGER")
    cancel();
    const isPrimed = isNumberFinite(countdown);
    if (isPrimed) {
      bomb.fuse = window.setTimeout(() => {
        if (target) {
          target(...args);
        }
        arm(false);
      }, countdown);
    }
    arm(isPrimed);
  };

  return {isArmed, trigger, disarm};
};
