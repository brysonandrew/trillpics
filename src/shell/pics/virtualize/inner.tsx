import {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
} from "react";
import clsx from "clsx";
import { MOTION_BLUR_FILTER_Y_PROPS } from "~/components/blur/constants";
import { useRef } from "~root/build/bundle";

export type TInnerHandle = {
  onEnter: () => void;
  onLeave: () => void;
};

const Inner = forwardRef<
  TInnerHandle,
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
    // useRef<HTMLUListElement | null>(
    //   null
    // );

    // useImperativeHandle(
    //   ref,
    //   () => {
    //     return {
    //       onEnter: () => {
    //         console.log(
    //           sourceRef.current
    //         );
    //         const r =
    //           sourceRef.current.onPointerEnter();
    //         console.log(r);
    //       },
    //       onLeave: () => {
    //         console.log(
    //           sourceRef.current
    //         );
    //         const r =
    //           sourceRef.current.onPointerLeave();
    //         console.log(r);
    //       },
    //     };
    //   },
    //   []
    // );
    // const { clear, isNoHover } =
    //   useHoverKey();
    // const handleMouseEnter = () => {
    //   console.log("enta");
    //   if (!isNoHover) clear();
    // };

    return (
      <ul
        ref={ref}
        // ref={(instance) => {
        //   if (
        //     instance &&
        //     !sourceRef.current
        //   ) {
        //     sourceRef.current =
        //       instance;
        //   }
        // }}
        className={clsx(className)}
        style={{
          ...style,
          ...MOTION_BLUR_FILTER_Y_PROPS,
        }}
      
        {...props}
      >
        {children}
      </ul>
    );
  }
);
Inner.displayName = "Inner";
export { Inner };
