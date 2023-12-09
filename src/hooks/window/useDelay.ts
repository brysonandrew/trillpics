import { useState, useEffect } from "react";
import { useTimeoutRef } from "./useTimeoutRef";

export const useDelay = (ms = 200) => {
  const [isReady, setReady] = useState(false);
  const { timeoutRef } = useTimeoutRef();
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setReady(true);
    }, ms);
  }, []);
  return isReady;
};