import {
  FC,
  forwardRef,
  PropsWithChildren,
} from "react";
import { BlurXy } from "~/components/blur/xy";
import { useHoverKey } from "~/hooks/use-hover-key";

export const Outer = forwardRef<
  HTMLDivElement,
  PropsWithChildren
>(({ children, ...props }, ref) => {
  const { clear, isNoHover } =
    useHoverKey();
  const handleMouseEnter = () => {
    if (!isNoHover) clear();
  };
  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <BlurXy>{children}</BlurXy>
    </div>
  );
});
