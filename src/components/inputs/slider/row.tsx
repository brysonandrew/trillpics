import {type FC} from 'react';
import {cx} from 'class-variance-authority';
import { TClassValueProps } from '@brysonandrew/config-types';
import { Slider } from '@radix-ui/react-slider';
import { TSliderProps } from '~/components/slider/input';
import { UiInputsSliderValue } from '~/components/slider/value';
import { DEFAULT_SLIDER_WIDTH } from '~/constants/inputs';

type TProps = TSliderProps & TClassValueProps;
export const UiInputsSliderRow: FC<TProps> = ({classValue, ...props}) => {
  return (
    <div className={cx('flex flex-row gap-2', classValue)}>
      <div
        className="flex items-center justify-center"
        style={{width: DEFAULT_SLIDER_WIDTH}}
      >
        <Slider {...props} />
      </div>
      <UiInputsSliderValue>{props.value}</UiInputsSliderValue>
    </div>
  );
};
