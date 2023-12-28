import { useTimeoutRef } from './useTimeoutRef';

export const useDelayCallback = (
  callback: (...args: any) => void,
  delay: number | null,
) => {
  const { timeoutRef, endTimeout } =
    useTimeoutRef();

  const handler = () => {
    endTimeout();
    if (typeof delay !== 'number') {
      return;
    }
    timeoutRef.current = setTimeout(
      callback,
      delay,
    );
  };

  // useEffect(() => {
  //   handler();
  // }, []);

  return handler;
};
