import {ComponentPropsWithoutRef, forwardRef, ElementRef} from 'react';

import * as SliderPrimitive from '@radix-ui/react-slider';
import {cx} from 'class-variance-authority';
import {clsx, type ClassValue} from 'clsx';

export type TSliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  thumbSizeClass?: 'size-4' | 'size-5';
  trackSizeClass?: 'h-2' | 'h-[6px]';
};
 const SliderInput = forwardRef<ElementRef<typeof SliderPrimitive.Root>, TSliderProps>(
  (
    {className, thumbSizeClass = 'size-4', trackSizeClass = 'h-2', ...props},
    ref
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      className={clsx(
        'relative flex w-full touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cx(
          'bg-_neutral-300 relative w-full grow overflow-hidden rounded-full',
          trackSizeClass
        )}
      >
        <SliderPrimitive.Range className="absolute h-full bg-black" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cx(
          'ring-offset-background focus-visible:ring-ring block rounded-full border border-black bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          thumbSizeClass
        )}
      />
    </SliderPrimitive.Root>
  )
);
SliderInput.displayName = SliderPrimitive.Root.displayName;

export {SliderInput};
