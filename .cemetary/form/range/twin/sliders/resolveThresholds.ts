import { TInputProps } from '@t/inputs';

export type TMinMax = {
  min: number;
  max: number;
};

export type TThresholdConfig = TMinMax &
  Required<Pick<TInputProps, 'step'>>;

export type TThresholdReturn =
  TMinMax & {
    tickCount: number;
  };

export const resolveThresholds = (
  config: TThresholdConfig,
) => {
  const min = Number(config.min) ?? 0;
  const max = Number(config.max) ?? 1;
  const step =
    Number(config.step) ?? 0.1;

  const tickCount = (max - min) / step;

  return { tickCount, min, max };
};
