import {type FC} from 'react';
import {cx} from 'class-variance-authority';
import { TClassValueProps } from '@brysonandrew/config-types';
import { SliderInput, TSliderProps } from '~/components/slider/input';
import { UiInputsSliderValue } from '~/components/slider/value';

type TProps = TSliderProps & TClassValueProps;
export const UiInputsSliderRow: FC<TProps> = ({classValue, ...props}) => {
  return (
    <div className={cx('flex flex-row gap-2', classValue)}>
      <div
        className="flex items-center justify-center"
        style={{width: 400}}
      >
        <SliderInput {...props} />
      </div>
      <UiInputsSliderValue>{props.value}</UiInputsSliderValue>
    </div>
  );
};
