import clsx from "clsx";
import {
  forwardRef,
  PropsWithChildren,
} from "react";
import { MOTION_BLUR_FILTER_Y_PROPS } from "~/components/blur/constants";

export const Inner = forwardRef<
  HTMLUListElement,
  PropsWithChildren<any>
>(
  (
    { children, className, style, ...props },
    ref
  ) => {
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
        className={clsx("fill",className)}
        style={{
          ...style,
          ...MOTION_BLUR_FILTER_Y_PROPS,
        }}
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
  }
);
