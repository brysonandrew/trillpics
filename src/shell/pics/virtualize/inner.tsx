import {
  forwardRef,
  PropsWithChildren,
} from "react";
import { BlurXy } from "~/components/blur/xy";
import { useHoverKey } from "~/hooks/use-hover-key";

export const Inner = forwardRef<
  HTMLUListElement,
  PropsWithChildren
>(({ children, ...props }, ref) => {
  // const { clear, isNoHover } =
  //   useHoverKey();
  // const handleMouseEnter = () => {
  //   if (!isNoHover) clear();
  // };
  // const {
  //   onUpdate,
  //   setVirtualizeList,
  //   virtualizeList,
  // } = useVirtualizeContext();
  // console.log(
  //   "virtualizeList",
  //   virtualizeList
  // );
  return (
    <ul
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
      {...props}
    >
      {children}
    </ul>
  );
});
