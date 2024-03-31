import { useMemo } from 'react';
import { resolveGradientBackground } from './resolveGradientBackground';
import { TMinMax } from '../resolveThresholds';

type TConfig = TMinMax & {
  to: number;
  from: number;
};
export const useBackgroundRangeColor =
  ({ to, from, min, max }: TConfig) => {
    const color = useMemo(() => {
      const fromValue = from;
      const toValue = to;
      const rangeDistance = max - min;
      const fromPosition =
        fromValue - min;
      const toPosition = toValue - min;
      return resolveGradientBackground({
        to: toPosition,
        from: fromPosition,
        distance: rangeDistance,
      });
    }, [to, from, max, min]);

    return color;
  };
