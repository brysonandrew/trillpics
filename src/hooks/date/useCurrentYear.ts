import { useMemo } from 'react';

export const resolveCurrentYear = () => {
  const now = Date.now();
  const dateNow = new Date(now);
  return dateNow.getFullYear();
};

export const useCurrentYear = () => {
  const year = useMemo(() => {
    return resolveCurrentYear();
  }, []);

  return year;
};
