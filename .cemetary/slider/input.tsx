import {
  ComponentPropsWithoutRef,
  forwardRef,
  ElementRef,
} from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cx } from "class-variance-authority";
import { clsx } from "clsx";

export type TSliderProps =
  ComponentPropsWithoutRef<
    typeof SliderPrimitive.Root
  > & {
    thumbSizeClass?:
      | "w-4 h-4"
      | "w-5 h-5";
    trackSizeClass?: "h-2" | "h-[6px]";
  };
export const InputsSliderInput = forwardRef<
  ElementRef<
    typeof SliderPrimitive.Root
  >,
  TSliderProps
>(
  (
    {
      className,
      thumbSizeClass = "w-4 h-4",
      trackSizeClass = "h-2",
      ...props
    },
    ref
  ) => (
    <SliderPrimitive.Root
      ref={ref}
      className={clsx(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cx(
          "relative _gradient-mesh bg-white-4 dark:bg-black w-full grow overflow-hidden rounded-full",
          trackSizeClass
        )}
        style={{
          backgroundColor:
            "rgba(0,0,0,0)",
        }}
      >
        <SliderPrimitive.Range className="absolute h-full _gradient-radial" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cx(
          "ring-offset-background focus-visible:ring-ring block rounded-full border border-black bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          thumbSizeClass
        )}
      />
    </SliderPrimitive.Root>
  )
);
