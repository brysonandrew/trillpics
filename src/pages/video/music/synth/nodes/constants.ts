import { TInputsNumberBaseProps } from "~/components/inputs/number";

export const FREQUENCY_TITLE = {
  frequency: "Hz",
} as const;

const FREQUENCY_OVERRIDES = {
  min: 1,
  max: 1200,
  step: 1,
  title: "Hz",
} as const;

const DELAY_TIME_OVERRIDES = {
  min: -0.00001,
  max: 1,
  step: 0.00001,
} as const;

const Q_OVERRIDES = {
  min: 0,
  max: 10,
  step: 0.01,
} as const;

export const INPUTS_NUMBER_OVERRIDES: Record<
  string,
  Partial<TInputsNumberBaseProps>
> = {
  frequency: FREQUENCY_OVERRIDES,
  delayTime: DELAY_TIME_OVERRIDES,
  Q: Q_OVERRIDES,
};
