import {
  forwardRef,
  PropsWithChildren,
} from "react";
import clsx from "clsx";

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
    return (
      <ul
        ref={ref}
        className={clsx(className)}
        style={{
          ...style,
          // ...MOTION_BLUR_FILTER_Y_PROPS,
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
