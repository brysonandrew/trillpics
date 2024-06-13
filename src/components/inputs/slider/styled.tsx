import {
  ComponentPropsWithoutRef,
  forwardRef,
  ElementRef,
} from "react";
import { cx } from "class-variance-authority";
import { boxSize } from "~uno/rules/box/size";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { resolveSquare } from "@brysonandrew/measure";
import { PlayerBackgroundMesh } from "~/pages/video/player/_background/mesh";

export type TSliderStyledProps =
  ComponentPropsWithoutRef<
    typeof SliderPrimitive.Root
  >;
export const SliderStyled = forwardRef<
  ElementRef<
    typeof SliderPrimitive.Root
  >,
  TSliderStyledProps
>(({ className, ...props }, ref) => {
  const s = boxSize();
  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cx(
        "relative flex w-full touch-none select-none items-center",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        className={cx(
          "relative _gradient-mesh bg-white-4 dark:bg-black w-full grow overflow-hidden rounded-full",

        )}
        style={{height:s.m025}}
      >
        <SliderPrimitive.Range className="absolute h-full _gradient-radial"/>
        <PlayerBackgroundMesh/>
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cx(
          "ring-offset-background focus-visible:ring-ring block rounded-full border border-black bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        )}
        style={resolveSquare(s.m05)}
      />
    </SliderPrimitive.Root>
  );
});
