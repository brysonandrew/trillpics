import { useMemo } from 'react';
import { TMinMax } from '../twin/sliders/resolveThresholds';
import { resolveGradientBackground } from './resolveGradientBackground';

type TConfig = TMinMax & {
  value: number;
};
export const useBackgroundRangeColor =
  ({ value, min, max }: TConfig) => {
    const color = useMemo(() => {
      const rangeDistance = max - min;
      const position = value - min;
      return resolveGradientBackground({
        position,
        distance: rangeDistance,
      });
    }, [value, max, min]);

    return color;
  };
