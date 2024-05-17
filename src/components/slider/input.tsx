import {
  ComponentPropsWithoutRef,
  forwardRef,
  ElementRef,
} from "react";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cx } from "class-variance-authority";
import {
  clsx,
  type ClassValue,
} from "clsx";
import { GRADIENT_MESH_LIGHT } from "~app/color/gradient/mesh";

export type TSliderProps =
  ComponentPropsWithoutRef<
    typeof SliderPrimitive.Root
  > & {
    thumbSizeClass?:
      | "w-4 h-4"
      | "w-5 h-5";
    trackSizeClass?: "h-2" | "h-[6px]";
  };
const SliderInput = forwardRef<
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
          "relative bg-white-4 dark:bg-black w-full grow overflow-hidden rounded-full",
          trackSizeClass
        )}
        style={{
          ...GRADIENT_MESH_LIGHT,
          backgroundSize: "2px 2px",
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
SliderInput.displayName =
  SliderPrimitive.Root.displayName;

export { SliderInput };
