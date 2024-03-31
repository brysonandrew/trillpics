import type { FC } from 'react';

import { Base } from '../input/Base';
import { TBaseProps } from '../config';
import { inputSliderCss } from './css/inputCss';
import { Ticks } from './Ticks';
import {
  TThresholdConfig,
  resolveThresholds,
} from './twin/sliders/resolveThresholds';
import { TInputProps } from '@t/inputs';

export const Input: FC<TBaseProps<TInputProps>> = ({
  inputProps: _inputProps,
  ...props
}) => {
  const inputProps = {
    css: inputSliderCss,
    type: 'range',
    min: 0,
    max: 1,
    step: 0.1,
    ..._inputProps,
  } as TInputProps & TThresholdConfig;

  const { tickCount } =
    resolveThresholds(inputProps);

  return (
    <div className='relative w-full'>
      <Ticks count={tickCount} />
      <Base
        inputProps={inputProps}
        {...props}
      />
    </div>
  );
};
