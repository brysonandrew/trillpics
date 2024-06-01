import {
  forwardRef,
  PropsWithChildren,
} from "react";
import clsx from "clsx";
import { MOTION_BLUR_FILTER_SCROLL_Y_PROPS } from "~/shell/init/svg/filters/blur/constants";

export type TOuterHandle = {
  isHovering: () => boolean;
};
const Outer = forwardRef<
  TOuterHandle,
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
    // const eventRef = useRef<{
    //   isHovering: boolean;
    // }>({ isHovering: false });

    // const sourceRef =
    //   useRef<null | HTMLDivElement>(
    //     null
    //   );
    // const source = sourceRef.current;
    // useImperativeHandle(
    //   ref,
    //   () => {
    //     return {
    //       isHovering: () => {
    //         return eventRef.current
    //           .isHovering;
    //       },
    //     };
    //   },
    //   []
    // );
    return (
      <div
        className={clsx(className)}
        style={{
          ...style,
          ...MOTION_BLUR_FILTER_SCROLL_Y_PROPS,

          // ...MOTION_BLUR_SHUFFLE_PROPS,

          // ...MOTION_BLUR_FILTER_SCROLL_PROPS,
          // ...MOTION_BLUR_FILTER_X_PROPS,
        }}
        ref={ref}
        // ref={(instance) => {
        //   if (instance && !source) {
        //     sourceRef.current =
        //       instance;
        //   }
        // }}
        // onPointerOver={() => {
        //   eventRef.current.isHovering =
        //     true;
        // }}
        // onPointerEnter={() => {
        //   eventRef.current.isHovering =
        //     true;
        // }}
        // onPointerLeave={() => {
        //   eventRef.current.isHovering =
        //     false;
        // }}

        {...props}
      >
        {children}
      </div>
    );
  }
);
Outer.displayName = "Outer";
export { Outer };
