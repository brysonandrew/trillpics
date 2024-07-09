import { forwardRef } from "react";
import { cx } from "class-variance-authority";
import { box } from "~uno/rules/box";
import { resolveSquare } from "@brysonandrew/measure";
import { PlayerBackgroundMesh } from "~/pages/video/player/_background/mesh";
import {
  TSliderRef,
  TSliderStyledProps,
} from "~/components/inputs/slider/types";
import * as SliderPrimitive from "@radix-ui/react-slider";

export const SliderStyled = forwardRef<
  TSliderRef,
  TSliderStyledProps
>(
  (
    { className, ...props },
    forwardedRef
  ) => {
    const value =
      (props.value ||
        props.defaultValue) ??
      [];

    
    return (
      <SliderPrimitive.Slider
        {...props}
        ref={forwardedRef}
      >
        <SliderPrimitive.Root
          className={cx(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track
            className={cx(
              "relative _bi-mesh bg-white-4 dark:bg-black w-full grow overflow-hidden rounded-full"
            )}
            style={{ height: box._05 }}
          >
            <SliderPrimitive.Range className="absolute h-full _bi-radial opacity-50" />
            <PlayerBackgroundMesh />
          </SliderPrimitive.Track>
          {value.map((_, i) => (
            <SliderPrimitive.Thumb
              key={i}
            />
          ))}
          <SliderPrimitive.Thumb
            className={cx(
              'border border-black',
              "focus-visible:ring-ring block rounded-full bg-white transition-colors focus-visible:outline-none"
            )}
            style={resolveSquare(box._05)}
          />
        </SliderPrimitive.Root>
      </SliderPrimitive.Slider>
    );
  }
);
