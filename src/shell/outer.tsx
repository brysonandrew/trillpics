import {
  FC,
  forwardRef,
  PropsWithChildren,
} from "react";
import { BlurXy } from "~/components/blur/xy";
import { useHoverKey } from "~/hooks/use-hover-key";
import { useVirtualizeScroll } from "~/shell/pics/virtualize/use-scroll";

export const Outer = forwardRef<
  HTMLDivElement,
  PropsWithChildren
>(({ children, ...props }, ref) => {
  const { clear, isNoHover } =
    useHoverKey();
  const handleMouseEnter = () => {
    if (!isNoHover) clear();
  };
  // const {
  //   onUpdate,
  //   setVirtualizeList,
  //   virtualizeList,
  // } = useVirtualizeScroll();
  // console.log(
  //   "virtualizeList",
  //   virtualizeList
  // );
  return (
    <div
      ref={ref}
      // ref={(instance) => {
      //   if (
      //     instance &&
      //     !virtualizeList
      //   ) {
      //     console.log(virtualizeList);

      //     //    console.log(instance);
      //     setVirtualizeList(
      //       virtualizeList
      //     );
      //   }
      // }}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <BlurXy>{children}</BlurXy>
    </div>
  );
});
