import {
  useEffect,
  useMemo,
} from "react";
import { isNumber } from "~/utils/validation/is/number";
import {
  isTimeout,
  TTimeout,
} from "~/utils/validation/is/timeout";

type _TTimeout =
  | TTimeout
  | number
  | null;

export const useTimeouts = () => {
  const timeouts = useMemo<_TTimeout[]>(
    () => [],
    []
  );

  const endOne = (
    timeout: _TTimeout
  ) => {
    if (isTimeout(timeout)) {
      clearTimeout(timeout);
    }
  };

  const end = (index?: number) => {
    if (isNumber(index)) {
      const timeout = timeouts[index];
      endOne(timeout);
      return;
    }
    timeouts.forEach(endOne);
  };

  useEffect(() => end, []);

  return { timeouts, end, endOne };
};
