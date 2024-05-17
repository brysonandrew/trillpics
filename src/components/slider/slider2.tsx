import React from 'react';

import type {VariantProps} from 'class-variance-authority';
import {cva, cx} from 'class-variance-authority';

import * as SliderPrimitive from '@radix-ui/react-slider';

const sliderStyles = cva([
  'flex items-center select-none touch-none h-[20px] relative',
]);

export type TSliderProps = VariantProps<typeof sliderStyles> & SliderPrimitive.SliderProps

export const Slider2: React.FC<TSliderProps> = React.forwardRef(
  ({className, ...props}, forwardedRef: React.Ref<HTMLButtonElement>) => {
    return (
      <SliderPrimitive.Root
        ref={forwardedRef}
        className={cx(sliderStyles({}), className)}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-[4px] w-full rounded-full bg-gray-200">
          <SliderPrimitive.Range className="bg-primary-600 absolute h-full rounded-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="border-primary-600 bg-white focus:border-primary-700 block size-[16px] cursor-pointer rounded-xl border-[2px] hover:bg-gray-100 focus:outline-none" />
      </SliderPrimitive.Root>
    );
  }
);

Slider2.displayName = 'Slider2';
