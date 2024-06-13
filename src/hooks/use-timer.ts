import {
  useMemo,
  useState,
} from "react";
import {
  TTimeout,
  isTimeout,
  isNumberFinite,
} from "~/utils/validation/is/timeout";

type TClock = {
  timer: TTimeout | null;
};
export const useTimer = <A extends []>(
  countdown = 1000,
  end?: (...args: A) => any
) => {
  const [isTicking, setTicking] =
    useState(false);
  const clock = useMemo<TClock>(
    () => ({ timer: null }),
    []
  );

  const cleanup = () => {
    if (isTimeout(clock.timer)) {
      clearTimeout(clock.timer);
    }
  };

  const stop = () => {
    cleanup();
    setTicking(false);
  };

  const start = (...args: A) => {
    cleanup();
    const isReady =
      isNumberFinite(countdown);
    if (isReady) {
      clock.timer = window.setTimeout(
        () => {
          console.log('end',end)
          if (end) {
            end(...args);
          }
          setTicking(false);
        },
        countdown
      );
    }
    setTicking(isReady);
  };

  return [isTicking, start, stop] as const;
};
