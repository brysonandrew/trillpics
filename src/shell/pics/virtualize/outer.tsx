import {
  forwardRef,
  PropsWithChildren,
} from "react";
import clsx from "clsx";
import { MOTION_BLUR_FILTER_X_PROPS } from "~/components/blur/constants";

export const Outer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<any>
>(
  (
    {
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    // const {
    //   onUpdate,
    //   setVirtualizeList,
    //   virtualizeList,
    // } = useVirtualizeContext();
    // console.log(
    //   "virtualizeList",
    //   virtualizeList
    // );
    console.log(props);
    return (
      <div
        className={clsx(
          "fill",
          className
        )}
        style={{
          ...style,
          ...MOTION_BLUR_FILTER_X_PROPS,
        }}
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
        {/* <BlurXy> */}
        {children}
        {/* </BlurXy> */}
      </div>
    );
  }
);
